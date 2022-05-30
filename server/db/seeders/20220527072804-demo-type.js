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
        type_name: 'WiFI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'комфорт',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'персонал',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'шум',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type_name: 'атмосфера',
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
