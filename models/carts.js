const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carts', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    customerid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    bookid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
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
    tableName: 'carts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "carts_pkey",
        unique: true,
        fields: [
          { name: "customerid" },
          { name: "bookid" },
        ]
      },
    ]
  });
};
