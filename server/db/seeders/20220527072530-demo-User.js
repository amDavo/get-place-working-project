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
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      nickname: '123',
      email: '123@mail.ru',
      password: '123',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        name: 'Johnt Doe',
        nickname: '12344',
        email: '124443@mail.ru',
        password: '12344',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
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
  }
};

'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//      */
//     await queryInterface.bulkInsert('Users', [
//       {
//         name: 'John Doe',
//         nickname: 'Keps',
//         email: 'keps@mail.ru',
//         password: '123',
//         isAdmin: true,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'John Doe',
//         nickname: 'Keps',
//         email: 'keps@mail.ru',
//         password: '123',
//         isAdmin:false,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ], {});
//   },
//
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//     await queryInterface.bulkDelete('Users', null, {});
//   }
// };
