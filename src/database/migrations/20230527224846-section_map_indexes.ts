'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('section_map_indexes', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      index_row: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      index_column: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      index_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      section_map_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { 
          model: { tableName: 'section_maps' }, 
          key: 'id' 
        },
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
    await queryInterface.dropTable('section_map_indexes');
  }
};
