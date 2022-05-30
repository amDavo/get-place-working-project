'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
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
  Comments.init({
    place_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
