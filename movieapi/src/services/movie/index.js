'use strict'
const { Movie } = require("../../models");
const user = require("../../models/user");
const theaterRouter = require("../../routers/theaters");

const getAllMovies = async () => {
    try {
        const movies = await Movie.findAll();
        return movies;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getMovieById = async (id) => {
    try {
        const movie = await Movie.findOne({
            where: {
                id,
            },
        });
        return movie;
    } catch (error) {
        return null;
    }
};

const getMovieByDate = async (startTime) => {
    try {
        const movie = await Movie.findAll({
            where: {
                startTime,
            }
        });
        return movie;
    } catch (error) {
        return null;
    }
}

const checkExistMovieById = async (id) => {
    try {
        const movie = await Movie.findOne({
            where: {
                id,
            },
        });
        
        if (!movie) {
            return false;
        }
        return true;
    } catch (error) {
        return false
    }
}

const deleteMovieById = async (id) => {
    try {
        const movie = await Movie.destroy({
            where: {
                id
            },
        })
        return movie;
    } catch (error) {     
        return null;
    }
}


const createMovie = async (movies) => {
    try {
        const newMovie = await Movie.create(movies);
        return newMovie;
    } catch (error) {
    console.log({ error });
        return null;
    }
}

const updateMoviebyId = async (id, data) => {
    try {
        const movie = await Movie.update(data, {
            where: {
                id
            }
        });
        return movie;
    } catch(error) {
        return null
    }
}


module.exports = {
    getAllMovies,
    getMovieById,
    checkExistMovieById,
    deleteMovieById,
    createMovie,
    updateMoviebyId,
    getMovieByDate
};