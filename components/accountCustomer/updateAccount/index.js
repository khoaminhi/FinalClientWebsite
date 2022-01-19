const express = require('express');
const router = express.Router();
const updateAccController = require('./updateAccountController');


router.get('/', function(req, res) {
    res.render('changePassword', { title: 'Thay đổi mật khẩu!' });
});

router.put("/modifyInfo", updateAccController.modify);
router.put("/changePassword", updateAccController.change);
router.put("/forgotPassword", updateAccController.forgot);

module.exports = router;