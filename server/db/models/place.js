'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Comments, Favorites, Rate }) {
      // define association here
      this.hasMany(Comments, { foreignKey: 'place_id' });
      this.hasMany(Favorites, { foreignKey: 'place_id' });
      this.hasMany(Rate, { foreignKey: 'place_id' });


    }

  }
  Place.init({
    place_name: DataTypes.STRING,
    location: DataTypes.STRING,
    img: DataTypes.TEXT,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    free: DataTypes.BOOLEAN,
    working_hours: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
