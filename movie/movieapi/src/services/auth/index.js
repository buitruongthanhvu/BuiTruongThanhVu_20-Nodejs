'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { AUTH } = require('../../config');
const { AUTH } = require('../../config/config.json')

const scriptPassword =  (matKhau) => {
  const salt =  bcrypt.genSaltSync(10);
  const hashed =  bcrypt.hashSync(matKhau, salt);
  return hashed;
};

const comparePassword =  (matKhau, passwordHashed) => {
  const isMatch =  bcrypt.compareSync(matKhau, passwordHashed);
  return isMatch;
};

const genToken = (data) => {
  const token = jwt.sign(data, AUTH.SECRET_KEY, { expiresIn: '1d' });
  return token;
};

const decodeToken = (token) => {
  const decode = jwt.verify(token, AUTH.SECRET_KEY);
  return decode;
};


module.exports = {
  scriptPassword,
  comparePassword,
  genToken,
  decodeToken,
};
