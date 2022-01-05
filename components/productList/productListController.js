const productListService = require('./productListService')
const {models} = require('../../models');
const category = require('../../models/category');
const e = require('express');

exports.productList = async (req, res) => {
    const categoryid = req.query.categoryid;
    const sort = req.query.sort;
    const page = req.query.page;
    const search = req.query.search;
    if(categoryid)
    {
        console.log("Category: " + categoryid)
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
    else if(sort === '1')
    {
        const all_books = await productListService.list();
        books = []
        books = all_books.sort(function(a,b) {
            return b.price - a.price
        });
        console.log(books)
        res.render('productList', {books});
    }
    else if(sort === '2')
    {
        console.log("Vao sort")
        const all_books = await productListService.list();
        books = []
        books = all_books.sort(function(a,b) {
            console.log("Sort")
            return a.price - b.price
        });
        console.log(books)
        res.render('productList', {books});
    }
    else if(search){
        console.log("Vao search" + search);
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
        console.log("Vao Page");
        const itemPerPage = 9;
        const books = await models.books.findAll({offset: parseInt(page)*itemPerPage, limit: itemPerPage});
        console.log("books: " + books);
        res.render('productList', {books});
    }
    else
    {
        const books = await productListService.list();
        res.render('productList', {books});
    }
}