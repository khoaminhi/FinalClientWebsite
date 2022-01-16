const {models} = require('./../../../models')

exports.addProductCartService = (bookid, unauthid) => {
    return models.carts.create(
        {
            bookid: bookid,
            customerid: '15b30324-9a61-445b-848b-09aca124723b',
            customersessionid: unauthid,
            quantity: 1,
            createddate: new Date(),
            isarchived: 2,
        },
        {
            returning: true,
        }
    )
    .then(function(result){
        return result;
    })
}