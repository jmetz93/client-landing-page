require('dotenv').config()
// plugin to send email
const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(email, name, message){

  
  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL_JACOB,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: 'jacob.metzinger@yahoo.com',
    to: process.env.EMAIL_ADDRESS,
    subject: 'bitch',
    text: 'yo',
    html: `<p>${name}</p>
            <p>${email}</p>
            <p>${message}</p>`
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    console.log('attempt')

    if(error) {
      console.log(error)
      res.send(error)
    }else {
      console.log('success')
      res.send('Success')
    }
    
    smtpTransport.close()
  })
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



module.exports = {
  sendEmail
}