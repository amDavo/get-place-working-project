'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Comments }) {
      // define association here
      this.hasMany(Comments, { foreignKey: 'user_id' });
    }

    static associate({ Favorites }) {
      // define association here
      this.hasMany(Favorites, { foreignKey: 'user_id' });
    }

    static associate({ Rate }) {
      // define association here
      this.hasMany(Rate, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
