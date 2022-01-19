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
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    bookid: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'books',
        key: 'id'
      }
    },
    isarchived: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    customersessionid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cartid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
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
          { name: "cartid" },
        ]
      },
    ]
  });
};
