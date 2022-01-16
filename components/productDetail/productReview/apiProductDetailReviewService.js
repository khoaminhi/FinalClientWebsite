//const { models } = require('./../../../models');
const sequelize = require('../../../models');

exports.addReviewService = (productid, customerid) => {
  try{
    return sequelize.sequelize.query(
      "update invoices set address = '" + address
      + "' where address is null",
      { type: sequelize.sequelize.QueryTypes.update }
    ).then(function () {
      return address;
    })  
  }
  catch(errer){
    return console.error();
  }
};

exports.getReviewService = () => {

}
