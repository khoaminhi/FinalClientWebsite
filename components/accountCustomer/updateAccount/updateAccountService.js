const { models } = require('../../../models');
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
const validate  = require('deep-email-validator');

exports.change = async() => {

}

exports.modify = async() => {
  return;
}
exports.forgot = async (emailcustomer) => {
  
  const isValidEmail = await validate.validate(emailcustomer);
  if (!isValidEmail.valid) return 'Mail của bạn không tồn tại';//check mail thật hay giả
  const adminRegister = await models.admins.findOne({ where: { role: 'register' }, raw: true, },); //get mail của admin register
  const accCustomer = await models.customers.findOne(
    {
      where: {
        email: emailcustomer,
      },
      raw: true,
    },
  );
  if (!accCustomer) {
    return 'Bạn đã nhập sai email!'; //check đã tồn tại mail (tài khoản) trong db chưa
  }
  const emailAdmin = adminRegister.email;
  const passwordAdmin = adminRegister.password;
  const codeRegister = Math.floor(100000 + Math.random() * 900000); //generate 6 digit password
  await (async () => {
    await models.customers.update(
      {
        password: codeRegister,
        updateddate: new Date(),
      },
      {
        where: {email: emailcustomer }
      },
    )
    sendMailCode(emailcustomer, emailAdmin, passwordAdmin, codeRegister); //send password to customer
  })();

  return 'Chờ khoản 2 phút để gởi được mail và nhận mật khẩu mới! Nếu không có hãy gửi lại yêu cầu mới!';
}

function sendMailCode(emailcustomer, emailAdmin, passwordAdmin, codeRegister) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailAdmin, // generated ethereal user
      pass: passwordAdmin, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const html = "<p>Đây là mật khẩu tài khoản mới. Lưu ý, đổi sau khi đăng nhập!</p><h3>" + codeRegister + "</h3>"
  transporter.sendMail({
    from: emailAdmin, // sender address
    to: emailcustomer, // list of receivers
    subject: "Mật khẩu mới tài khoản khách hàng web bán sách!", // Subject line
    html, // html body
  });
}