'use strict'
const express = require('express');
const { theater } = require('../../models')
const {getAllTheater, createTheater,getTheaterById,
   checkExistTheaterById,
    deleteTheaterById, updateTheaterbyId} = require('../../services/theaters')

const theaterRouter = express.Router();

theaterRouter.get('/QuanLyRap/LayThongTinHeThongRap', async (req, res) => {
   const theaters = await getAllTheater();
   if(!theaters) {
    return res.status(500).send('can not get theaters list');
   } 
   res.status(200).send(theaters)
} )

theaterRouter.post('/QuanLyRap/ThemRap', async (req, res) => {
   const { name, diaChi, movieId } = req.body;

   if (!name || !name.trim()) {
      return res.status(400).send('name is required')
   }

   const theaters = await createTheater({
      name, diaChi, movieId
   });

   if(!theaters) {
      return res.status(500).send('can not create theater')
   }  

   res.status(200).send(theaters)
})

theaterRouter.delete('/QuanLyRap/LayThongTinHeThongRap/:id', async (req, res) => {
   const { id } = req.params;

   const isExistTheaterById = await checkExistTheaterById(id);

   if(!isExistTheaterById) {
      return res.status(404).send(`theater id ${id} is not exist on db`)
   }

   const item = await deleteTheaterById(id)
   if(!item) {
      return res.status(500).send(`can not delete theater id ${id}`)
   }

   res.status(200).send(`theater id ${id} deleted`)
})

theaterRouter.put('/QuanLyPhim/LayThongTinPhim/:id', async (req, res) => {
   const { id } = req.params;

   const { name, diaChi, movieId} = req.body;

   if (!name || !name.trim()) {
       return res.status(400).send('name is required');
   }

   const isExistTheaterById = await checkExistTheaterById(id);

   if (!isExistTheaterById) {
       return res.status(404).send(`theater id ${id} is not exist on db`);
   }
   const data = {
       name,
       diaChi,
       movieId
   }
   await updateTheaterbyId(id, data);
   res.status(200).send(data)
})

theaterRouter.get('/QuanLyRap/LayThongTinHeThongRap/:id', async (req, res) => {
   const { id } = req.params;

   const theater = await getTheaterById(id);

   if(!theater) {
      return res.status(500).send(`theater id ${id} is not exist on db`)
   }

   res.status(200).send(theater)
})

module.exports = theaterRouter