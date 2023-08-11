const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', (req, res) => {
    res.send('This is Post Method')
  })


app.delete('/delete', (req, res) => {
    res.send('This is a delete Method')
  })


app.delete('/put', (req, res) => {
    res.send('This is PUT Method')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})