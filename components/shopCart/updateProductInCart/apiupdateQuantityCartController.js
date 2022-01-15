const apiUpdateQuantityCartService = require('./apiUpdateQuantityInCartService')

exports.updateQuantityInCart = async (req, res) => {
    let {cartid, quantity} = req.body;
    try {
        quantity = await apiUpdateQuantityCartService.updateQuantityInCart(cartid, quantity);
        res.status(200).json(quantity);
        console.log('khoa', quantity);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
