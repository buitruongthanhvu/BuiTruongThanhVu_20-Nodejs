'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie, Ticket}) {
      // define association here
      this.hasMany(Movie, {foreignKey:"movieId", as:"Movie"})
      this.hasMany(Ticket, {foreignKey:"id", as:"ticketData"})
    }
  }
  theater.init({
    name: DataTypes.STRING,
    diaChi: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'theater',
  });
  return theater;
};