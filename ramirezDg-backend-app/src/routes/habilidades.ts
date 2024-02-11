import express from 'express'
import * as data from '../services/infoServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(data.getHabilidadName())
})

router.post('/', (_req, res) => {
  res.send('Saving')
})

export default router
