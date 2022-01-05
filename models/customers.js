const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "customers_name_key"
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "customers_email_key"
    },
    phone: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      unique: "customers_phone_key"
    },
    locked: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    createddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    updateddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "customers_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "customers_phone_key",
        unique: true,
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "customers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
