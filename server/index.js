require('dotenv').config()
const express = require('express')
const parser = require('body-parser')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')
const nodemailer = require('nodemailer')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(helmet())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  console.log('trying to get')
})

app.post('/email', (req, res) => {
  const { email, name, message } = req.body;

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL_JACOB,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_ADDRESS,
    subject: name,
    text: message,
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
})

app.listen(port, () => {
  console.log('Listening on port: ', port)
})

