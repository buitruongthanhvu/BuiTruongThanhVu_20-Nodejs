'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taikhoan: {
        type: Sequelize.STRING
      },
      matKhau: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      soDT: {
        type: Sequelize.STRING
      },
      maNhom: {
        type: Sequelize.STRING
      },
      maLoaiNguoiDung: {
        type: Sequelize.STRING
      },
      hoTen: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};