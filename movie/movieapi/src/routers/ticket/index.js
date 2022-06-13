'use strict'
const express = require('express');
const {ticket} = require('../../models')
const {
    createTicket,
    getAllTicket,
    getTicketById
} = require('../../services/ticket')
const ticketRouter = express.Router()

ticketRouter.post('/QuanLyDatVe/DatVe', async (req, res) => {
    const {userId, movieId, theaterId, maGhe} = req.body;
    
    if(!maGhe || !maGhe.trim()) {
        return res.status(400).send('maGhe is required')
    }

    const ticket = await createTicket({
        userId, movieId, theaterId, maGhe
    });

    if(!ticket) {
        return res.status(500).send('can not create ticket');
    }
    res.status(200).send(ticket)
})

ticketRouter.get('/QuanLyDatVe/DanhSachVeDat', async (req, res) => {
    const ticket = await getAllTicket();

    console.log("a", ticket)

    if(!ticket) {
        return res.status(500).send('can not get ticket list');
    }
    res.status(200).send(ticket)
})

ticketRouter.get('/QuanLyDatVe/DanhSachVeDat/:id', async (req, res) => {
    const { id } = req.params;

    const ticket = await getTicketById(id);

    if (!ticket) {
        return res.status(404).send(`ticket id ${id} is not exist on db`);
    }

    res.status(200).send(ticket)
});

module.exports = ticketRouter