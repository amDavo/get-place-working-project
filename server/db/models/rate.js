'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User, Type, Place }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Place, { foreignKey: 'place_id' });
      this.belongsTo(Type , { foreignKey: 'type_id' });

    }

  }
  Rate.init({
    place_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    rate_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};
