'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Location',
      [
        {
          title: 'Hanoi',
          location_type: 'City',
          woeid: '1236594',
          latt_long: '21.030653,105.847130'
        },
        {
          title: 'Hà Nội',
          location_type: 'City',
          woeid: '1236594',
          latt_long: '21.030653,105.847130'
        },
        {
          title: 'HCM',
          location_type: 'City',
          woeid: '1252431',
          latt_long: '20.030653,109.847130'
        },
        {
          title: 'Hồ Chí Minh',
          location_type: 'City',
          woeid: '1252431',
          latt_long: '20.030653,109.847130'
        },
        {
          title: 'Đà Nẵng',
          location_type: 'City',
          woeid: '696969',
          latt_long: '29.030653,109.847130'
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
