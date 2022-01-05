const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
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
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(100),
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
    urlimage: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    categoryid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    publisherid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'publishers',
        key: 'id'
      }
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'books',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "books_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
