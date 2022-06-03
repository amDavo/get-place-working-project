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
    // await queryInterface.bulkInsert('Comments', [
    //     {
    //   place_id: 1,
    //   user_id: 1,
    //   body: 'zaebis mesto',
    //       createdAt: new Date(),
    //       updatedAt: new Date()
    // },
    //   {
    //     place_id: 2,
    //     user_id: 1,
    //     body: 'nishtyak mestechchchchko',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Places', null, {});
  }
};
