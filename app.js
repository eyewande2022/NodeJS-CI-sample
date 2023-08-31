const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('About to work on Git Actions CI!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
