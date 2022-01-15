//const { models } = require('./../../../models')
const sequelize = require('./../../../models');

exports.list = () => {
  return sequelize.sequelize.query(
    'SELECT c.cartid, c.quantity as cartquantity, b.price, b."name", b.description, b.author,' 
    + ' b.urlimage ,(b.price * c.quantity) as total'
    + ' FROM books b join carts c on b.id = c.bookid'
    + " where c.isarchived != '1' or c.isarchived is null",
    { type: sequelize.sequelize.QueryTypes.SELECT }
  );
}