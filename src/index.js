const express = require('express')
const app = express()
const port = 8000

let turn = 0

const game = [
  [
    'empty',
    'empty',
    'empty'
  ],
  [
    'empty',
    'empty',
    'empty'
  ],
  [
    'empty',
    'empty',
    'empty'
  ]
]

app.get('/getPoint/:x/:y', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  const filename = game[req.params.y][req.params.x]

  return res.sendFile(__dirname + '/images/' + filename + '.png')
})

app.get('/setPoint/:x/:y', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  game[req.params.y][req.params.x] = turn === 0 ? 'mark' : 'circle'

  return res.redirect('back')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})