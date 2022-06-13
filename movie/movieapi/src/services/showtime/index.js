'use strict'
const { Showtime } = require("../../models");

const createShowTime = async (showtimes) => {
    try {
        const showtime = await Showtime.create(showtimes);
        return showtime
    } catch (error) {
        console.log({error});
        return null
    }
}

const getShowTime = async () => {
    try {
        const showtimes = await Showtime.findAll();
        return showtimes
    } catch (error) {
        console.log({error});
        return null
    }
}

const getShowById = async (id) => {
    try {
        const showtime = await Showtime.findOne({
            where: {
                id,
            }
        });
        return showtime 
    } catch (error) {
        console.log({error})
        return null
    }
}

module.exports = {
    createShowTime,
    getShowTime,
    getShowById
}