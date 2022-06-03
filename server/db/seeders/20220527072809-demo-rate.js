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
    // await queryInterface.bulkInsert('Rates', [
    //     {
    //   place_id: 1,
    //   user_id: 1,
    //   type_id: 1,
    //   rate_number: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    // },
    //   {
    //     place_id: 1,
    //     user_id: 1,
    //     type_id: 2,
    //     rate_number: 5,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 1,
    //     user_id: 1,
    //     type_id: 3,
    //     rate_number: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 1,
    //     user_id: 1,
    //     type_id: 4,
    //     rate_number: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //
    //   {
    //     place_id: 1,
    //     user_id: 1,
    //     type_id: 5,
    //     rate_number: 5,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     type_id: 1,
    //     rate_number: 5,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     type_id: 2,
    //     rate_number: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     type_id: 3,
    //     rate_number: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     type_id: 4,
    //     rate_number: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     type_id: 5,
    //     rate_number: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:

     */
    await queryInterface.bulkDelete('Rates', null, {});
  }
};
