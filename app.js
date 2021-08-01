const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

app.use(print)

app.get('/', (req, res) => {
  res.send('列出全部 Todo <br> <a href="/new">新增 Todo 頁面</a> <br> <a href="/:id">顯示一筆 Todo</a> <br> <form action="/" method="POST"> <button type="submit">Create</button></form >')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

function print(req, res, next) {
  const startTime = new Date()
  const currentTime = moment(startTime).format('YYYY-MM-DD HH:mm:ss')
  console.log(currentTime, '|', req.method, 'from', req.originalUrl)
  res.on('finish', () => {
    const endTime = new Date()
    const finishTime = moment(endTime).format('YYYY-MM-DD HH:mm:ss')
    const timeSpent = moment(endTime).diff(startTime, 'milliseconds', true)
    console.log(finishTime, '|', req.method, 'from', req.originalUrl, '| total time:', timeSpent, 'ms')
    console.log(typeof (endTime))
  })
  next()
}