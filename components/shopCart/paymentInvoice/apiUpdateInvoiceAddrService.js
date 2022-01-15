//const { models } = require('./../../../models');
const sequelize = require('./../../../models');

exports.updateInvoiceAddr = (city, district, block, street) => {
  let address = city + ', ' + district + ', ' + block + ', ' + street;
  let id = '55b30324-23a4-445b-848b-09aca124723b';
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
  
}
