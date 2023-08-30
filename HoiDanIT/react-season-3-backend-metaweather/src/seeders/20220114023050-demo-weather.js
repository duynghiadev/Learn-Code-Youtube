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

    await queryInterface.bulkInsert('Weather',
      [
        {
          applicable_date: new Date(),
          weather_state_name: 'Snow',
          max_temp: '30',
          min_temp: '24',
          wind_direction_compass: 'nne',
          wind_speed: '100',
          location_id: 1
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Clear',
          max_temp: '26',
          min_temp: '20',
          wind_direction_compass: 'e',
          wind_speed: '123',
          location_id: 1
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Light Cloud',
          max_temp: '33',
          min_temp: '12',
          wind_direction_compass: 'n',
          wind_speed: '78',
          location_id: 1
        },

        {
          applicable_date: new Date(),
          weather_state_name: 'Thunderstorm',
          max_temp: '32',
          min_temp: '30',
          wind_direction_compass: 's',
          wind_speed: '20',
          location_id: 1
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Heavy Cloud',
          max_temp: '69',
          min_temp: '96',
          wind_direction_compass: 'w',
          wind_speed: '123',
          location_id: 1
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Heavy Cloud',
          max_temp: '69',
          min_temp: '96',
          wind_direction_compass: 'w',
          wind_speed: '123',
          location_id: 3
        },

        {
          applicable_date: new Date(),
          weather_state_name: 'Snow',
          max_temp: '30',
          min_temp: '24',
          wind_direction_compass: 'nne',
          wind_speed: '100',
          location_id: 3
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Clear',
          max_temp: '26',
          min_temp: '20',
          wind_direction_compass: 'e',
          wind_speed: '123',
          location_id: 3
        },
        {
          applicable_date: new Date(),
          weather_state_name: 'Light Cloud',
          max_temp: '33',
          min_temp: '12',
          wind_direction_compass: 'n',
          wind_speed: '78',
          location_id: 3
        },

        {
          applicable_date: new Date(),
          weather_state_name: 'Thunderstorm',
          max_temp: '32',
          min_temp: '30',
          wind_direction_compass: 's',
          wind_speed: '20',
          location_id: 3
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
