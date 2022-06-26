const nodemailer = require('nodemailer');

exports.kirimEmail = dataEmail => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        require: true,
        auth: {
          user: 'tristansatria136@gmail.com',
          pass: 'imuu fdga pint qqhn',
        },
      });
    return (
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email Terkirim!: ${info.message}`))
        .catch(err => console.log(`Terjadi Kesalahan!: ${err}`))
    )
}