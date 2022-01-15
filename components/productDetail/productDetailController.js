const productDetailService = require('./productDetailService')
const {models} = require('../../models')

exports.productDetail = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;
    if(page){
        const book = await productDetailService.findBook(id);
        const comments = await productDetailService.findComments(id, page);
        const related_books = await models.books.findAll({where: {categoryid: book['categoryid']}, raw: true})
        res.render('productDetail', {book, comments, related_books});
    }
    else{
        const book = await productDetailService.findBook(id);
        const comments = await productDetailService.findComments(id, 0);
        const related_books = await models.books.findAll({where: {categoryid: book['categoryid']}, raw: true})
        res.render('productDetail', {book, comments, related_books});
    }
}