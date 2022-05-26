'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Rate }) {
      // define association here
      this.hasMany(Rate, { foreignKey: 'type_id' });
    }
  }
  Type.init({
    rating_wifi: DataTypes.INTEGER,
    rating_comf: DataTypes.INTEGER,
    rating_pers: DataTypes.INTEGER,
    rating_noise: DataTypes.INTEGER,
    rating_atmo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
