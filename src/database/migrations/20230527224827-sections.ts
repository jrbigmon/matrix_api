'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sections', { 
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      warehouse_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model : { tableName: 'warehouses' },
          key: 'id',
        }
      },
      storage_box_type_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: { tableName: 'storage_box_types' },
          key: 'id',
        },
      },
      section_map_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: { tableName: 'section_map_id' },
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
    await queryInterface.dropTable('sections');
  }
};
