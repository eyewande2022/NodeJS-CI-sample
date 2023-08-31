const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My CI set is successful for the develop to use!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
