const productListService = require('./productListInCartService')

exports.productListInCart = async (req, res) => {
    const productCart = await productListService.list();
    res.render('shopCart', {productCart});
}