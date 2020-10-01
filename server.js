const express = require('express')
const path = require('path')
const app = express()
const port = 3000





app.use(express.static('./src'))
app.use(express.static('./src/pages'))
app.use(express.static('./src/css'))
app.use(express.static('./src/js'))

// const main = document.getElementById('main')
app.get('/', (req, res) => {
  
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports={port};