import express from 'express'
import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
  host: 'containers-us-west-130.railway.app',
  user: 'root',
  password: 'ZwDypelGjP8KV72PeX6K',
  database: 'railway',
  port: 7872
});

const app = express()

app.get('/', async(req, res) => {
  res.json('Hello world')
})

app.get('/users', async(req, res) => {
  const response = await connection.query('SELECT * FROM USERS')
  res.json(response[0])
})

app.listen(process.env.PORT || 3000)
