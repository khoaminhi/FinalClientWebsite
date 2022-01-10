const {models} = require('../../models')
exports.list = () => {
    return models.books.findAll({raw: true});
}

exports.findBook = async(id) => {
    const book = await models.books.findOne({where: {id: id}, raw: true});
    return book;
}

exports.findComments = async(id, page) => {
    const itemPerPage = 2;
    const comments = await models.comments.findAll({where: {bookid: id}, raw: true, offset: parseInt(page)*itemPerPage, limit: itemPerPage});
    return comments;
}