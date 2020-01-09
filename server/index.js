import express from 'express'
import path from 'path'
import envConfig from './configs/env.config'
import { connect } from './db/index'

const app = express()

connect()

app.listen(envConfig.PORT, () => (
  console.error(`Node listening on port ${envConfig.PORT}`)
))

app.use(express.static(path.resolve(__dirname, '../client/build')))

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => (
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
))

