const addProductCartService = require('./addProduct2CartService')

exports.addProductCartController = async (req, res) => {
    const {bookid} = req.body;
    const unauthid = req.session.unauthId;
    try {
        result = await addProductCartService.addProductCartService(bookid, unauthid);
        res.status(200).json(result);
        console.log('add product', result);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}