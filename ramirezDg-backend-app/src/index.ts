import express from 'express'
import infoRouter from './routes/info'
import infoHabilidades from './routes/ability'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Some pinged here!!')
  res.send('pong')
})

app.use('/api/info', infoRouter)
app.use('/api/ability', infoHabilidades)

app.listen(PORT, () => {
  console.log(`Server rinning on port ${PORT}`)
})
