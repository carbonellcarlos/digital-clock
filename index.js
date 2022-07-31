const express = require('express')
const path = require('path')

// Loads env variables
require('dotenv').config()

const app = express()

const PORT = Number(process.env.PORT) || 3000

// Adds json parsing middleware
app.use(express.json())

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('client', 'dist', 'index.html'))
})

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
