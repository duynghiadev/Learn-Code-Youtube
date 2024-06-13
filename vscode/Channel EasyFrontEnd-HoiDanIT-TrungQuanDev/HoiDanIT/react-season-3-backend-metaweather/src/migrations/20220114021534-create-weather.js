'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Weather', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicable_date: {
        type: Sequelize.DATE
      },
      weather_state_name: {
        type: Sequelize.STRING
      },
      max_temp: {
        type: Sequelize.STRING
      },
      min_temp: {
        type: Sequelize.STRING
      },
      wind_direction_compass: {
        type: Sequelize.STRING
      },
      wind_speed: {
        type: Sequelize.STRING
      },
      location_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Location',
          key: 'id'
        }
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Weather');
  }
};