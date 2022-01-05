const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "category_name_key"
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
    groupid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'categorygroup',
        key: 'id'
      }
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "category_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
