const homeService = require('./homeService')
exports.list = async (req, res) => {
    const books = await homeService.list();
    res.render('index', {books});
}