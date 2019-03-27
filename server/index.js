require('dotenv').config()
const express = require('express')
const parser = require('body-parser')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(helmet())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/ryan', (req, res)=> {
  res.send('Ryan is queer')
})

app.listen(port, () => {
  console.log('Listening on port: ', port)
})

