const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoicesdetail', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoiceid: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'invoices',
        key: 'id'
      }
    },
    bookid: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoicesdetail',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "invoicesdetail_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
