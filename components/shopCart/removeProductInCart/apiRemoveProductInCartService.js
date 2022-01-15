const { models } = require('./../../../models');

exports.removeProductIncart = (cartid) => {
  return models.carts.update
  ( {
    isarchived: 1
    }, 
    {
    where: { cartid: cartid }
    },
  )
}