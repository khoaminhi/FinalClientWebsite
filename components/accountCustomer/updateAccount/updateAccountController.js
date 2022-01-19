const updateAccService = require('./updateAccountService')

exports.forgot = async (req, res) => {
    let {emailcustomer} = req.query;
    try {
        const messageRegister = await updateAccService.forgot(emailcustomer);
        res.status(200).json(messageRegister);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.change = async (req, res) => {
    let {emailcustomer} = req.body;
    try {
        const messageRegister = await updateAccService.change();
        res.status(200).json(messageRegister);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}

exports.modify = async (req, res) => {
    let {emailcustomer} = req.body;
    try {
        const messageRegister = await updateAccService.modify();
        res.status(200).json(messageRegister);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message,
        });
    }
}
