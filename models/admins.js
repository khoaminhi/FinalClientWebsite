const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admins', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "admins_email_key"
    },
    password: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admins',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admins_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "admins_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
