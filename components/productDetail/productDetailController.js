// const productDetailService = require('./productDetailService')
const {models} = require('../../models')

exports.productDetail = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;
    const itemPerPage = 3;
    if(page){
        const book = await models.books.findOne({where: {id: id}, raw: true})
        const comments = await models.comments.findAll({where: {bookid: id}, raw: true, offset: parseInt(page)*itemPerPage, limit: itemPerPage})
        const related_books = await models.books.findAll({where: {categoryid: book['categoryid']}, raw: true})
        res.render('productDetail', {book, comments, related_books});
    }
    else{
        const book = await models.books.findOne({where: {id: id}, raw: true})
        const comments = await models.comments.findAll({where: {bookid: id}, raw: true, offset: 0*itemPerPage, limit: itemPerPage})
        const related_books = await models.books.findAll({where: {categoryid: book['categoryid']}, raw: true})
        res.render('productDetail', {book, comments, related_books});
    }
}