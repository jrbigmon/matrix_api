'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('config_matrix', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('config_matrix');
  }
};
