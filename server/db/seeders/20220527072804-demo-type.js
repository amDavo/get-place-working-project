'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Types', [

      {
        type_name: 'rating_wifi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'rating_comf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'rating_pers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'rating_noise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'rating_atmo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Types', null, {});
  }
};
