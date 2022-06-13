'use strict';

const { Op } = require('sequelize');
const { User, Avatar, Movie, Ticket } = require('../../models');

const createUser = async (data) => {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getUserByTaiKhoan = async (taikhoan) => {
  try {
    const user = await User.findOne({
      where: {
        taikhoan,
      },
    });
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAllUser = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const getMovieHistoryByUser = async (userId) => {
  try {
    const data = await User.findOne({
      where: {
        id: userId,
      },
      include: [
        {
          model: Movie,
          as: 'movies',
          where: {
            [Op.not]: 1,
          },
        },
      ],
    });

    return data;
  } catch (error) {
    return null;
  }
};

const getUserByKw = async (taikhoan) => {
  try {
    const filteredUsers = await User.findAll({
      where: {
        taikhoan,
      }
    })
    return filteredUsers
  } catch (error) {
    return null
  }
}

const createTicket = async (userId, movieId) => {
  try {
    Ticket.create({
      userId,
      movieId,
    });
  } catch (error) {
    return null;
  }
};

const checkExistUserById = async (id) => {
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return false;
    }
    return true;
  } catch (error) {
    return false
  }
}

const updateUserbyId = async (id, data) => {
  try {
      const user = await User.update(data, {
          where: {
              id
          }
      });
      return user;
  } catch(error) {
      return null
  }
}

const deleteUserById = async (id) => {
  try {
    const user = await User.destroy({
      where: {
        id,
      }
    });
    return user;
  } catch (error) {
    return null;
  }
}


// console.log(User.filter(user => user.userId === 1))

module.exports = {
  createUser,
  getUserByTaiKhoan,
  getUserById,
  getAllUser,
  getUserByKw,
  // storageAvatar,
  getMovieHistoryByUser,
  createTicket,
  checkExistUserById,
  updateUserbyId,
  deleteUserById
};
