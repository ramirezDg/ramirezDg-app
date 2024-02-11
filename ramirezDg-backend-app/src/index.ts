import express from 'express'
import infoRouter from './routes/info'
import infoHabilidades from './routes/habilidades'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Some pinged here!!')
  res.send('pong')
})

app.use('/api/info', infoRouter)
app.use('/api/habilidades', infoHabilidades)


app.listen(PORT, () => {
  console.log(`Server rinning on port ${PORT}`)
})
