
import { Ability, AbilityName, NewAbilityName } from '../types'
import infoDataJson from './ability.json'

const info: Ability[] = infoDataJson as Ability[]
/* Consulta Todo Ee Json */
export const getInfo = (): Ability[] | undefined => info

export const addInfo = (newAbilityName: NewAbilityName): Ability => {
  const newEntry = {
    id: Math.max(...info.map(d => d.id)) + 1,
    ...newAbilityName
  }
  info.push(newEntry)

  return newEntry
}

/* Services */
/* Lista de habilidades Solo Nombre */
export const getAbilityName = (): AbilityName[] => {
  return info.map((nameAbility ) => {
    return nameAbility 
  })
}

/* Buscar por Id */

export const finById_name = (id: number): AbilityName | undefined => {
  const entry = info.find(d => d.id === id)
  if (entry != null) {
    const {id, ...restOfAbility } = entry
    return restOfAbility
  }
  return undefined
}
