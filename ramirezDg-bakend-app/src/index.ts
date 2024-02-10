import express from 'express'
import infoRouter from './routes/info'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log("Some pinged here!!")
    res.send('pong')
})

app.use('/api/info', infoRouter)

app.listen(PORT, () => {
    console.log(`Server rinning on port ${PORT}`)
})