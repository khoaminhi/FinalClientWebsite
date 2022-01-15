const { models } = require('./../../../models');
const sequelize = require('./../../../models');

exports.updateQuantityInCart = (cartid, quantity) => {

  return sequelize.sequelize.query(
    'SELECT b.quantity as bookquantity'
    + ' FROM books b join carts c on b.id = c.bookid'
    + " where c.cartid = '" + cartid + "'",
    { type: sequelize.sequelize.QueryTypes.SELECT }
  ).then(function (bookquantity) {

    if (quantity > bookquantity[0].bookquantity) {
      quantity = bookquantity[0].bookquantity;
    }

    models.carts.update
      ({
        quantity: quantity
      },
        {
          where: { cartid: cartid }
        },
      )

    return quantity;
  })
}
