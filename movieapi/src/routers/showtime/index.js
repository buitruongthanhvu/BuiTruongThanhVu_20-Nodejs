'use strict'
const express = require('express');
const { createShowTime, getShowTime, getShowById } = require('../../services/showtime')
const showTimeRouter = express.Router();

showTimeRouter.post('/QuanLyDatVe/TaoLichChieu', async (req, res) => {
    const { ngayChieu, theaterId, giaVe, movieId } = req.body;
    console.log("a", ngayChieu)

    if (!ngayChieu || !ngayChieu.trim()) {
        return res.status(400).send('ngayChieu or giaVe are required')
    }

    const show = await createShowTime({
        ngayChieu, theaterId, giaVe, movieId
    });

    if(!show) {
        return res.status(500).send('can not create show')
    }
    res.status(200).send(show)
})

showTimeRouter.get('/QuanLyDatVe/LayDanhSachLichChieu', async (req, res) => {
    const show = await getShowTime()
    if(!show) {
        return res.status(500).send('can not get show list');
    }
    res.status(200).send(show)
})

showTimeRouter.get('/QuanLyDatVe/LayDanhSachLichChieu/:id', async (req, res) => {
    const { id } = req.params;
    
    const show = await getShowById(id)
    if(!show) {
        return res.status(500).send(`show id ${id} is not exist on db`);
    }
    res.status(200).send(show)
})

module.exports = showTimeRouter