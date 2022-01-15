const apiCartService = require('./apiCartService')

exports.caculateTotalPayCart = async (req, res) => {
    const {totalmembers} = req.body;
    try {
        const totalPay = await apiCartService.totalPay(totalmembers);
        res.status(201).json(totalPay);
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}