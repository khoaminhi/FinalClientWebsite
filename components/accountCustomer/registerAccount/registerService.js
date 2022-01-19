const { models } = require('./../../../models');
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
const validate  = require('deep-email-validator');

exports.registerService = async (emailcustomer) => {
  
  const isValidEmail = await validate.validate(emailcustomer);
  if (!isValidEmail.valid) return 'Mail của bạn không tồn tại';//check mail thật hay giả
  const adminRegister = await models.admins.findOne({ where: { role: 'register' }, raw: true, },); //get mail của admin register
  const { count, rows } = await models.customers.findAndCountAll(
    {
      where: {
        [Op.or]: [
          { name: emailcustomer },
          { email: emailcustomer }
        ]
      },
      raw: true,
    },
  );
  if (count > 0) {
    return 'Email đã tồn tại!'; //check đã tồn tại mail (tài khoản) trong db chưa
  }
  const emailAdmin = adminRegister.email;
  const passwordAdmin = adminRegister.password;
  const codeRegister = Math.floor(100000 + Math.random() * 900000); //generate 6 digit password
  await (async () => {
    await models.customers.create(
      {
        name: emailcustomer,
        email: emailcustomer,
        password: codeRegister,
        isarchived: 0,
        createddate: new Date(),
      },
    )
    sendMailCode(emailcustomer, emailAdmin, passwordAdmin, codeRegister); //send password to customer
  })();

  return 'Chờ khoản 2 phút để gởi được mail và nhận mật khẩu khởi tạo! Nếu không có hãy gửi lại yêu cầu mới!';
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
  const html = "<p>Đây là mật khẩu tài khoản. Lưu ý, đổi sau khi đăng nhập!</p><h3>" + codeRegister + "</h3>"
  transporter.sendMail({
    from: emailAdmin, // sender address
    to: emailcustomer, // list of receivers
    subject: "Mật khẩu tài khoản khách hàng web bán sách!", // Subject line
    html, // html body
  });
}