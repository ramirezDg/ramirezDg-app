import express from 'express'
import * as dataServices from '../services/infoServices'
import toNewAbilityEntry from '../utils'
import { Ability } from '../types'

const router = express.Router()

/* GET list json */

router.get('/', (_req, res) => {
  res.send(dataServices.getInfo())
})

/* router.get('/', (_req, res) => {
  res.send(dataServices.getAbilityName())
}) */

/* GET for by ID */

router.get('/:id', (req, res) => {
  const entry = dataServices.finById_name(+req.params.id)
  return (entry != null)
    ? res.send(entry)
    : res.sendStatus(404)
})

/* POST + PARSER */

router.post('/', (req, res) => {
  try {
    const newAbilityEntry = toNewAbilityEntry(req.body)

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

router.patch('/:id', (req, res) => {
  console.log(req.body)
  const { nameAbility } = req.body;
  const id = +req.params.id;
  
  if (!id || !nameAbility) {
    res.status(400).json({ error: 'id or name is missing' })
  }

  try {
    const updatedAbility = dataServices.updateAbility(id, nameAbility)
    res.json(updatedAbility)
  } catch (error) {
    console.log(error)
    return;
  }

})

router.delete('/:id', (req, res) => {
  const id = +req.params.id;
  if (!id) {
    res.status(400).json({ error: 'id is missing' })
  }

  try {
    dataServices.deleteAbility(id)
    res.status(204).end()
  } catch (error) {
    console.log(error)
    return;
  }
})



/* DELETE */
export default router
