const express = require('express')
const app = express()
const port = 8888

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
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  
  const filename = game[req.params.y][req.params.x]

  return res.sendFile(__dirname + '/images/' + filename + '.png')
})

app.get('/setPoint/:x/:y', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  if (game[req.params.y][req.params.x] === 'mark' || game[req.params.y][req.params.x] === 'circle') {
    return res.redirect('https://github.com/gkoniaris/gkoniaris')
  }

  game[req.params.y][req.params.x] = turn === 0 ? 'mark' : 'circle'

  turn = turn === 1 ? 0 : 1

  return res.redirect('https://github.com/gkoniaris/gkoniaris')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
