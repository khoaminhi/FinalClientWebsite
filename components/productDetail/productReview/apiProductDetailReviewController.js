const reviewService = require('./apiProductDetailReviewService')

exports.addReview = async (req, res) => {
    let {productid, customerid} = req.body;
    try {
        const product = await reviewService.addReview(productid, customerid);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.getReview = async (req, res) => {
    let {productid} = req.body;
    try {
        const product = await reviewService.addReview(productid);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
