const registerService = require('./registerService')

exports.registerController = async (req, res) => {
    let {emailcustomer} = req.body;
    try {
        const messageRegister = await registerService.registerService(emailcustomer);
        res.status(200).json(messageRegister);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
