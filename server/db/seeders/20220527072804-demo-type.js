'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
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
                type_name: 'wifi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type_name: 'staff',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type_name: 'comfort',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type_name: 'noise',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                type_name: 'atmosphere',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Types', null, {});
    }
};
