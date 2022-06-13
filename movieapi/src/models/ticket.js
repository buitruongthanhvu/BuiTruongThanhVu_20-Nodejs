'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Ticket,theater, Showtime,Movie}) {
      // define association here\
      this.belongsToMany(User, {through: Ticket, foreignKey: 'userId'});
      this.belongsToMany(theater, {through: Ticket, foreignKey: 'theaterId'});
      this.belongsTo(Movie, {foreignKey: "movieId", as: "movieData"})
      // this.belongsToMany(Showtime, {through: Ticket, foreignKey: 'giaVe'} )
    }
  }
  Ticket.init({
    userId: DataTypes.STRING,
    movieId: DataTypes.STRING,
    theaterId: DataTypes.STRING,
    giaVe: DataTypes.STRING,
    maGhe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};