'use strict';
const { Model } = require('sequelize');
const theater = require('./theater');
const ticket = require('./ticket');
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie, theater,Ticket}) {
        this.belongsTo(Movie, { foreignKey: 'movieId', as: 'movieTime' });
        this.belongsTo(theater, {foreignKey: 'theaterId', as: 'theaterData'})
        // this.belongsToMany(Ticket, {through: Ticket, foreignKey: 'giaVe'})
        
    }
  }
  Showtime.init(
    {
      ngayChieu: DataTypes.STRING,
      theaterId: DataTypes.STRING,
      giaVe: DataTypes.STRING,
      movieId: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Showtime',
    }
  );
  return Showtime;
};
