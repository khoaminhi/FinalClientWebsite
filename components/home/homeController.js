const homeService = require('./homeService')
exports.list = async (req, res) => {
    const books = await homeService.list();
    console.log(books);
    res.render('index', {books});
}