const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('New CI server successfully and ready for production!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
