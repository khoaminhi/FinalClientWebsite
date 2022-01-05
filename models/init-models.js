var DataTypes = require("sequelize").DataTypes;
var _admins = require("./admins");
var _books = require("./books");
var _carts = require("./carts");
var _category = require("./category");
var _categorygroup = require("./categorygroup");
var _comments = require("./comments");
var _customers = require("./customers");
var _customers_address_phone = require("./customers_address_phone");
var _invoices = require("./invoices");
var _invoicesdetail = require("./invoicesdetail");
var _publishers = require("./publishers");

function initModels(sequelize) {
  var admins = _admins(sequelize, DataTypes);
  var books = _books(sequelize, DataTypes);
  var carts = _carts(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var categorygroup = _categorygroup(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var customers_address_phone = _customers_address_phone(sequelize, DataTypes);
  var invoices = _invoices(sequelize, DataTypes);
  var invoicesdetail = _invoicesdetail(sequelize, DataTypes);
  var publishers = _publishers(sequelize, DataTypes);

  books.belongsToMany(customers, { as: 'customerid_customers', through: carts, foreignKey: "bookid", otherKey: "customerid" });
  customers.belongsToMany(books, { as: 'bookid_books', through: carts, foreignKey: "customerid", otherKey: "bookid" });
  carts.belongsTo(books, { as: "book", foreignKey: "bookid"});
  books.hasMany(carts, { as: "carts", foreignKey: "bookid"});
  comments.belongsTo(books, { as: "book", foreignKey: "bookid"});
  books.hasMany(comments, { as: "comments", foreignKey: "bookid"});
  invoicesdetail.belongsTo(books, { as: "book", foreignKey: "bookid"});
  books.hasMany(invoicesdetail, { as: "invoicesdetails", foreignKey: "bookid"});
  books.belongsTo(category, { as: "category", foreignKey: "categoryid"});
  category.hasMany(books, { as: "books", foreignKey: "categoryid"});
  category.belongsTo(categorygroup, { as: "group", foreignKey: "groupid"});
  categorygroup.hasMany(category, { as: "categories", foreignKey: "groupid"});
  carts.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(carts, { as: "carts", foreignKey: "customerid"});
  comments.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(comments, { as: "comments", foreignKey: "customerid"});
  customers_address_phone.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(customers_address_phone, { as: "customers_address_phones", foreignKey: "customerid"});
  invoices.belongsTo(customers, { as: "customer", foreignKey: "customerid"});
  customers.hasMany(invoices, { as: "invoices", foreignKey: "customerid"});
  invoicesdetail.belongsTo(invoices, { as: "invoice", foreignKey: "invoiceid"});
  invoices.hasMany(invoicesdetail, { as: "invoicesdetails", foreignKey: "invoiceid"});
  books.belongsTo(publishers, { as: "publisher", foreignKey: "publisherid"});
  publishers.hasMany(books, { as: "books", foreignKey: "publisherid"});

  return {
    admins,
    books,
    carts,
    category,
    categorygroup,
    comments,
    customers,
    customers_address_phone,
    invoices,
    invoicesdetail,
    publishers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
