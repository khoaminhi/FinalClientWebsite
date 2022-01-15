const apiUpdateInvoiceAddrService = require('./apiUpdateInvoiceAddrService')

exports.updateInvoiceAddr = async (req, res) => {
    let {city, district, block, street} = req.body;
    try {
        addr = await apiUpdateInvoiceAddrService.updateInvoiceAddr(city, district, block, street);
        res.status(200).json(addr);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
