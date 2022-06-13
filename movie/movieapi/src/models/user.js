'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toJSON() {
      const attributes = Object.assign({}, this.get());

      delete attributes.matKhau;
      return attributes;
    }
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Movie, Ticket }) {
      this.belongsToMany(Movie, { through: Ticket, as: 'userTicket' });
    }
  }
  User.init({
    taikhoan: DataTypes.STRING,
    matKhau: DataTypes.STRING,
    email: DataTypes.STRING,
    soDT: DataTypes.STRING,
    hoTen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};