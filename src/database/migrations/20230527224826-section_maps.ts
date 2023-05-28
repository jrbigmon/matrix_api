'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('section_maps', { 
      id: { 
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      columns: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      rows: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      levels: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      config_column_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: { tableName: 'config_matrix' },
          key: 'id',
        }
      },
      config_row_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: { tableName: 'config_matrix' },
          key: 'id',
        }
      },
      config_level_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: { tableName: 'config_matrix' },
          key: 'id',
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'active',
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
    await queryInterface.dropTable('section_maps');
  }
};
