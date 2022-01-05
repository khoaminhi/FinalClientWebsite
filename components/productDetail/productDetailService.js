const {models} = require('../../models')
exports.list = () => {
    return models.books.findAll({raw: true});
}