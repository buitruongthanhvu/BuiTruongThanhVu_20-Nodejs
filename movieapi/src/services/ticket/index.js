'use strict'
const { Ticket } = require("../../models");

const createTicket = async (tickets) => {
    try {
        const ticket = await Ticket.create(tickets);
        return ticket
    } catch (error) {
        console.log({error});
        return null
    }
}

const getAllTicket = async () => {
    try {
        const tickets = await Ticket.findAll();
        return tickets
    } catch (error) {
        console.log({error});
        return null
    }
}

const getTicketById = async (id) => {
    try {
        const movie = await Ticket.findOne({
            where: {
                id,
            },
        });
        return movie;
    } catch (error) {
        return null;
    }
};

module.exports = {
    createTicket,
    getAllTicket,
    getTicketById
}