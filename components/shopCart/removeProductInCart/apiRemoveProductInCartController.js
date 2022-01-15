const apiCartService = require('./apiRemoveProductInCartService')

exports.removecartItem = async (req, res) => {
    const {cartid} = req.body;
    try {
        const cartItem = await apiCartService.removeProductIncart(cartid);
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}