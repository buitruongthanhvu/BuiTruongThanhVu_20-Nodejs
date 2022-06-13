'use strict'
const { theater } = require("../../models");

const getAllTheater = async () => {
    try {
        const theaters = await theater.findAll();
        return theaters;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createTheater = async (theaters) => {
    try {
        const create = await theater.create(theaters);
        return create
    } catch (error) {
        console.log({error});
        return null
    }
}

const getTheaterById = async (id) => {
    try {
        const theaterid = await theater.findOne({
            where: {
                id,
            },
        })
        return theaterid
    } catch (error) {
        return null;
    }
}

const checkExistTheaterById = async (id) => {
    try {
        const existTheater = await theaterRouter.findOne({
            where: {
                id,
            }
        });

        if (!existTheater) {
            return false;
        }
        return true;
    } catch (error) {
        return false
    }
}

const deleteTheaterById = async (id) => {
    try {
        const delTheater = await theater.destroy({
            where: {
                id
            },
        })
        return delTheater;
    } catch (error) {     
        return null;
    }
}

const updateTheaterbyId = async (id, data) => {
    try {
        const updTheater = await theater.update(data, {
            where: {
                id
            }
        });
        return updTheater;
    } catch(error) {
        return null
    }
}


module.exports = {
    getAllTheater,
    createTheater,
    getTheaterById,
    deleteTheaterById,
    updateTheaterbyId,
    checkExistTheaterById
}