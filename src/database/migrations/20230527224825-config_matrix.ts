'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('config_matrix', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      initial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      prefix: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      suffix: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ordination: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('config_matrix');
  },
};
