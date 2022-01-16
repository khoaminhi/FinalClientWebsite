const productDetailService = require('./productDetailService')
const { models } = require('../../models')

exports.productDetail = async (req, res, next) => {
    const id = req.params.id;
    const book = await productDetailService.findBook(id);
    const related_books = await models.books.findAll({ where: { categoryid: book['categoryid'] }, raw: true })
    res.render('productDetail', { book, related_books });
}

exports.productComment = async (req, res) => {
    const {bookid} = req.query;
    try {
        const khoacomments = await productDetailService.findComments(bookid);
        res.status(200).json(khoacomments);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.addComment = async (req, res) => {
    const {bookid, customerid, comment, rate} = req.body;
    try {
        const khoacomments = await productDetailService.createComment(bookid, customerid, comment, rate);
        res.status(201).json(khoacomments);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}