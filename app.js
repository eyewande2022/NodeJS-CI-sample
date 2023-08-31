const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('CI server successfully and ready for prod!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
