const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '4b6b8c4f56f365',
      pass: 'ba8f23c156d44e'
    }
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Ujjwal Verma <ujjawalverma77@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    //html:
  };

  // 3) Acually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
