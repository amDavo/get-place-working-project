'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating_wifi: {
        type: Sequelize.INTEGER
      },
      rating_comf: {
        type: Sequelize.INTEGER
      },
      rating_pers: {
        type: Sequelize.INTEGER
      },
      rating_noise: {
        type: Sequelize.INTEGER
      },
      rating_atmo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Types');
  }
};