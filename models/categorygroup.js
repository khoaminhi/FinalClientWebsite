const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorygroup', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "categorygroup_name_key"
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true
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
    tableName: 'categorygroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categorygroup_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "categorygroup_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
