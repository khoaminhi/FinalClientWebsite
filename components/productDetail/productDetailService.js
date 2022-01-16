const {models} = require('../../models')
const sequelize = require('./../../models');

exports.list = () => {
    return models.books.findAll({raw: true});
}

exports.findBook = async(id) => {
    const book = await models.books.findOne({where: {id: id}, raw: true});
    return book;
}

exports.findComments = (bookid) => {
    let query = 'select b.id , c.rate , c."comment" , c2."name" , c."date" '
    + ' from books b join "comments" c on b.id =c.bookid '
    + ' join customers c2 on c2.id = c.customerid'
    + " where b.id = '" + bookid + "'";
    try{
        return sequelize.sequelize.query(
          query,
          { type: sequelize.sequelize.QueryTypes.select }
        ).then(function (comments) {
          return comments;
        })  
      }
      catch(errer){
        return console.error();
      }
}

exports.createComment = async (bookid, email, comment, rate) => {

    return models.customers.findOne({where: {email: email}, raw: true})
    .then(function(customer){
        let customerid = customer.id;
        return models.comments.create(
            {
                bookid,
                customerid,
                rate,
                comment,
                date: new Date(),
                isarchived: 2,
            },
        )
    });
    
}