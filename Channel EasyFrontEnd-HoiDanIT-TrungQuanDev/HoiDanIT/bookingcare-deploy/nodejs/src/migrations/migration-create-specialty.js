"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Specialties", {
      // currentNumber: DataTypes.INTEGER,
      // maxNumber: DataTypes.INTEGER,
      // date: DataTypes.DATE,
      // timeType: DataTypes.STRING,
      // doctorId: DataTypes.INTEGER,

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.BLOB("long"),
      },
      name: {
        type: Sequelize.STRING,
      },
      descriptionHTML: {
        type: Sequelize.TEXT,
      },
      descriptionMarkdown: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Specialties");
  },
};
