'use strict'
const express = require('express');
const { Movie } = require('../../models')
const {
    getAllMovies,
    getMovieById,
    checkExistMovieById,
    deleteMovieById,
    createMovie,
    updateMoviebyId,
    getMovieByDate
} = require('../../services/movie')

const movieRouter = express.Router();

//Lấy danh sách phim
movieRouter.get('/QuanLyPhim/LayDanhSachPhim', async (req, res) => {
    const movies = await getAllMovies();
    console.log('aaaaaa', movies)
    if (!movies) {
        res.status(500).send('can not get movie list');
        return
    }

    res.status(200).send(movies)
});

movieRouter.post('/QuanLyPhim/LayThongTinPhim/create', async (req, res) => {
    const { name, trailer, poster, description, startTime, evaluate } = req.body;

    if (!name || !name.trim()) {
        console.log("name", name)
        return res.status(400).send('name is required');
    }

    const movie = await createMovie({
        name,
        trailer,
        poster,
        description,
        startTime,
        evaluate
    });

    
    if (!movie) {
        return res.status(500).send('can not create movie')
    }
    res.status(200).send(movie)
});

//lấy chi tiết phim
movieRouter.get('/QuanLyPhim/LayThongTinPhim/:id', async (req, res) => {
    const { id } = req.params;

    const movie = await getMovieById(id);

    if (!movie) {
        return res.status(404).send(`movie id ${id} is not exist on db`);
    }

    res.status(200).send(movie)
});

movieRouter.get('/QuanLyPhim/LayThongTinPhimTheoNgay/', async (req, res) => {
    const { startTime } = req.body;
    console.log("a", startTime)

    const movie = await getMovieByDate(startTime);

    if (!movie) {
        return res.status(404).send(`can not find movie`);
    }

    res.status(200).send(movie)
});

movieRouter.delete('/QuanLyPhim/LayThongTinPhim/:id', async (req, res) => {
    const { id } = req.params;

    const isExistedMovie = await checkExistMovieById(id)

    if (!isExistedMovie) {
        return res.status(404).send(`movie id ${id} is not exist on db`);
    }

    const item = await deleteMovieById(id)
    if (!item) {
        return res.status(500).send(`can not delete movie id ${id}`);
    }
    res.status(200).send(`movie id ${id} deleted`)
})

movieRouter.put('/QuanLyPhim/LayThongTinPhim/:id', async (req, res) => {
    const { id } = req.params;

    const { name, trailer, poster, description, startTime, evaluate } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).send('name is required');
    }

    const isExistedMovie = checkExistMovieById(id);

    if (!isExistedMovie) {
        return res.status(404).send(`movie id ${id} is not exist on db`);
    }
    const data = {
        name,
        trailer,
        poster,
        description,
        startTime,
        evaluate,
    }
    await updateMoviebyId(id, data);
    res.status(200).send(data)
})



//lấy danh sách phim phân trang
movieRouter.get('/QuanLyPhim/LayDanhSachPhimPhanTrang', async (req, res) => {
    const movies = await getAllMovies();
    console.log('aaaaaa', movies)
    if (!movies) {
        res.status(500).send('can not get movie list');
        return
    }


    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < movies.length) {
        results.next = {
            page: page + 1,
            limit: limit
        }
    }
    
    
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }
    

    results.results = await movies.slice(startIndex, endIndex)
    if(!results) {
        return res.status(500).send('can not get movie pagination')
    }
    res.status(200).send(results)
})

module.exports = movieRouter;