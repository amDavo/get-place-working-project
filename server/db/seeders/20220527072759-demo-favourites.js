'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // /**
    //  * Add seed commands here.
    //  *
    //  * Example:
    //  * await queryInterface.bulkInsert('People', [{
    //  *   name: 'John Doe',
    //  *   isBetaMember: false
    //  * }], {});
    // */
    // await queryInterface.bulkInsert('Favorites', [{
    //   place_id: 1,
    //   user_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Favourites', null, {});
     */
    await queryInterface.bulkDelete('Favorites', null, {});
  }
};
