const productListService = require('./productListService')
const {models} = require('../../models');
const category = require('../../models/category');
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
    else if(publisherid)
    {
        const all_books = await productListService.list();
        books = []
        for (let i=0; i < all_books.length; i++)
        {
            if(all_books[i]['publisherid'] === publisherid)
            {
                books.push(all_books[i])
            }
        }
        res.render('productList', {books});
    }
    else if(sort === '1')
    {
        const all_books = await productListService.list();
        books = []
        books = all_books.sort(function(a,b) {
            return b.price - a.price
        });
        res.render('productList', {books});
    }
    else if(sort === '2')
    {
        const all_books = await productListService.list();
        books = []
        books = all_books.sort(function(a,b) {
            return a.price - b.price
        });
        res.render('productList', {books});
    }
    else if(search){
        const all_books = await productListService.list();
        books = [];
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
        res.render('productList', {books});
    }
    else if(page){
        const itemPerPage = 9;
        const books = await models.books.findAll({offset: parseInt(page)*itemPerPage, limit: itemPerPage});
        res.render('productList', {books});
    }
    else
    {
        const books = await productListService.list();
        res.render('productList', {books});
    }
}