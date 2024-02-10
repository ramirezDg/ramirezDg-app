import express from 'express'
import * as data from '../services/infoServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(data.getHabilidades())
})

router.post('/', (_req, res) => {
  res.send('Saving')
})

export default router
