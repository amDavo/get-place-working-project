'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }

    static associate({ Place }) {
      // define association here
      this.belongsTo(Place, { foreignKey: 'place_id' });
    }
  }
  Favorites.init({
    place_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};
