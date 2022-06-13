'use strict';
const express = require('express');
// const { SYSTEM } = require('../../config');
const { authenticate } = require('../../middlewares/auth');
const user = require('../../models/user');
// const { uploadAvatar } = require('../../middlewares/upload');
const { scriptPassword, comparePassword, genToken } = require('../../services/auth');
const { getMovieById } = require('../../services/movie');
const { createUser, getUserByTaiKhoan, getUserById, getUserByKw,
   getMovieHistoryByUser,updateUserbyId, getAllUser, checkExistUserById,
   deleteUserById } = require('../../services/users');
// const { User, Avatar, Movie, Ticket } = require('../../models');
const userRouter = express.Router();

userRouter.post('/QuanLyNguoiDung/sign-up', async (req, res) => {
  const { taikhoan, matKhau, email, soDT, hoTen } = req.body;
  console.log("a", matKhau);
  const passwordHashed = scriptPassword(matKhau);
  console.log("b", passwordHashed); 
  const datas = await createUser({
    taikhoan,
    matKhau: passwordHashed,
    email,
    soDT,
    hoTen,
  });

  if (!datas) {
    return res.status(500).send('can not create user');
  }
  res.status(201).send(datas);
});

userRouter.post('/QuanLyNguoiDung/sign-in', async (req, res) => {
  const { taikhoan, matKhau } = req.body;
  console.log("a", taikhoan)

  // check valid data input

  const user = await getUserByTaiKhoan(taikhoan);

  // check email is exist
  if (!user) {
    return res.status(400).send(`taikhoan: ${taikhoan} is not exist`);
  }

  const isSuccess = comparePassword(matKhau, user.matKhau);

  if (!isSuccess) {
    return res.status(400).send(`matKhau is not match`);
  }

  const token = genToken({ id: user.id });

  return res.status(200).send({ user, token });
});



userRouter.get('/QuanLyNguoiDung/LayDanhSachNguoiDung', async (req, res) => {
  const users = await getAllUser();
  if(!users) {
    return res.status(500).send('can not get user list');
  }

  res.status(200).send(users)
})

userRouter.get('/QuanLyNguoiDung/LayDanhSachNguoiDung/:id', async (req, res) => {
  const { id } = req.params;
  
  const users = await getUserById(id);

  if(!users) {
    return res.status(500).send(`user id ${id} is not exist on db`)
  }

  res.status(200).send(users)
});

//tìm kiếm người dùng qua taikhoan
userRouter.get('/QuanLyNguoiDung/TimKiemNguoiDung/:taikhoan', async (req, res) => {

  const { taikhoan } = req.params

  const filters = await getUserByKw(taikhoan)

  if(!filters) {
    return res.status(500).send(`user name  is not exist on db`)
  }
  res.status(200).send(filters)

  
});

//lấy danh sách người dùng phân trang
userRouter.get('/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang', async (req, res) => {
  const users = await getAllUser();
  if(!users) {
    return res.status(500).send('can not get user list');
  }
  // res.status(200).send(users)


  const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < users.length) {
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
    
    results.results = await users.slice(startIndex, endIndex)
    if(!results) {
        return res.status(500).send('can not get movie pagination')
    }
    res.status(200).send(results)

})

//update user
userRouter.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung/:id', async (req, res) => {
  const { id } = req.params;

  const { email, soDT, hoTen } = req.body;

  const isExistedUser = checkExistUserById(id);

  if(!isExistedUser) {
    return res.status(404).send(`user id ${id} is not exist on db`)
  }

  const data = {
    email,
    soDT,
    hoTen
  }
  await updateUserbyId(id, data);
  res.status(200).send(data)
})

userRouter.delete('/QuanLyNguoiDung/XoaNguoiDung/:id', async (req, res) => {
  const { id } = req.params;

  const isExistedUser = checkExistUserById(id);

  if (!isExistedUser) {
    return res.status(404).send(`user id ${id} is not exist on db`)
  }

  const item = await deleteUserById(id)

  if(!item) {
    return res.status(500).send(`can not delete user id ${id}`)
  }
  res.status(200).send(`user id ${id} deleted`)
})

module.exports = userRouter;
