import express from 'express'
import * as data from '../services/infoServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(data.getInfo())
})

router.get('/', (_req, res) => {
  res.send(data.getAbilityName())
})

router.get('/:id', (req, res) => {
  const entry = data.finById_name(+req.params.id)
  return (entry != null)
    ? res.send(entry)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const { nameAbility } = req.body
  
  const newNameAbility = data.addInfo(nameAbility)

  res.json(newNameAbility)
})

export default router
