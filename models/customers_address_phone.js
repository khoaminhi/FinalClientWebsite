const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers_address_phone', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    block: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    tableName: 'customers_address_phone',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_address_phone_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
