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

    if(page){
        const books = await productListService.listPages(page)
        res.render('productList', {books});
    }
    else if(categoryid){
        const books = await productListService.listCategories(categoryid);
        res.render('productList', {books});
    }
    else if(publisherid){
        const books = await productListService.listPublishers(publisherid);
        res.render('productList', {books});
    }
    else if(sort === '1'){
        const books = await productListService.listIncrease();
        res.render('productList', {books});
    }
    else if(sort === '2'){
        const books = await productListService.listDecrease();
        res.render('productList', {books});
    }
    else if(search){
        const books = await productListService.listSearch(search);
        res.render('productList', {books});
    }
    else{
        const books = await productListService.list();
        res.render('productList', {books});
    }
}