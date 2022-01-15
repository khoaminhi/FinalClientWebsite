const express = require('express');
const router = express.Router();
const apiUpdateInvoiceAddrController = require('./apiupdateInvoiceAddrController');

router.put("/updateInvoiceAddr", apiUpdateInvoiceAddrController.updateInvoiceAddr);
module.exports = router;