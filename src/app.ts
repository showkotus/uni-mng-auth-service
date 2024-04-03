// const express = require('express')
import express, { Application, Request } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Server runninng..')
})

export default app
