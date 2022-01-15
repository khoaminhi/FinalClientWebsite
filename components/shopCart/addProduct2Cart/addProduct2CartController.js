const productListService = require('./addProduct2CartService')
const {models} = require('./../../../models');
const category = require('./../../../models/category');
const e = require('express');

exports.productList = async (req, res) => {
    const categoryid = req.query.categoryid;
    const sort = req.query.sort;
    const page = req.query.page;
    const search = req.query.search;
    const publisherid = req.query.publisherid;
    if(categoryid)
    {
        const all_books = await productListService.list();
        books = []
        for (let i=0; i < all_books.length; i++)
        {
            if(all_books[i]['categoryid'] === categoryid)
            {
                books.push(all_books[i])
            }
        }
        res.render('productList', {books});
    }
}