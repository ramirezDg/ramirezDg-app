import express from 'express'
import * as dataServices from '../services/infoServices'
import toNewAbilityEntry from '../utils'
import { Ability } from '../types'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(dataServices.getInfo())
})

router.get('/', (_req, res) => {
  res.send(dataServices.getAbilityName())
})

router.get('/:id', (req, res) => {
  const entry = dataServices.finById_name(+req.params.id)
  return (entry != null)
    ? res.send(entry)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newAbilityEntry = toNewAbilityEntry(req.body)
    /* const { nameAbility } = req.body */

    const newNameAbility: string = newAbilityEntry.abilityName

    const newAbility: Ability = dataServices.addInfo(newNameAbility)

    res.json(newAbility)
  } catch (error) {
    if (error instanceof Error) {
      // Ahora TypeScript sabe que "error" es de tipo "Error"
      res.status(400).send(error.message)
    } else {
      // Manejar otros casos si es necesario
      res.status(400).send('An unknown error occurred')
    }
  }
})

export default router
