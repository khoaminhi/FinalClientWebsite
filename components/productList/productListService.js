const {models} = require('../../models');
const books = require('../../models/books');

exports.list = (page = 0, itemPerPage = 9) => {
    return models.books.findAll({offset: page*itemPerPage, limit: itemPerPage, raw: true});
}

exports.listPages = async (page) => {
    const itemPerPage = 9;
    const books = await models.books.findAll({offset: parseInt(page)*itemPerPage, limit: itemPerPage, raw: true});
    return books;
}

exports.listCategories = async (categoryid) => {
    const itemPerPage = 9;
    const all_books = await models.books.findAll({raw: true, limit: itemPerPage});
    let books = []
    for (let i=0; i < all_books.length; i++)
    {
        if(all_books[i]['categoryid'] === categoryid)
        {
            books.push(all_books[i])
        }
    }
    return books;
}

exports.listPublishers = async (publisherid) => {
    const itemPerPage = 9;
    const all_books = await models.books.findAll({raw: true, limit: itemPerPage});
    let books = []
    for (let i=0; i < all_books.length; i++)
    {
        if(all_books[i]['publisherid'] === publisherid)
        {
            books.push(all_books[i])
        }
    }
    return books;
}

exports.listIncrease = async () => {
    const itemPerPage = 9;
    const all_books = await models.books.findAll({raw: true, limit: itemPerPage});
    let books = all_books.sort(function(a,b) {
        return b.price - a.price
    });
    return books;
}

exports.listDecrease = async () => {
    const itemPerPage = 9;
    const all_books = await models.books.findAll({raw: true, limit: itemPerPage});
    let books = all_books.sort(function(a,b) {
        return a.price - b.price
    });
    return books;
}

exports.listSearch = async (search) => {
    const itemPerPage = 9;
    const all_books = await models.books.findAll({raw: true, limit: itemPerPage});
    let books = [];
    for (let i=0; i < all_books.length; i++)
    {
        if(all_books[i]['categoryid'].includes(search))
        {
            books.push(all_books[i])
        }
        else if (all_books[i]['name'].includes(search))
        {
            books.push(all_books[i])
        }
    }
    return books;
}