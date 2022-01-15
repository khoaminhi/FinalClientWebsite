const sequelize = require('./../../models');

exports.list = () => {
  return sequelize.sequelize.query(
    'SELECT c.quantity as cartquantity, b.price, b."name", b.description, b.author,'
    + ' b.urlimage ,(b.price * c.quantity) as total'
    + ' FROM books b join carts c on b.id = c.bookid;',
    { type: sequelize.sequelize.QueryTypes.SELECT }
  );
}


exports.totalPay = (totalmembers) => {
  let totalpay = sequelize.sequelize.query(
    'SELECT (b.price * c.quantity) as total'
    + ' FROM books b join carts c on b.id = c.bookid;',
    { type: sequelize.sequelize.QueryTypes.SELECT }
  );

  return totalpay;
}