const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invoices', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    money: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    states: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    customerid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "invoices_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
