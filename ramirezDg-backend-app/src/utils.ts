import { NewAbilityName } from './types'

const parseAbilityName = (abilityName: any): string => {
  if (!isString(abilityName)) {
    throw new Error('Incorrect or missing Ability')
  }
  return abilityName
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const toNewAbilityEntry = (object: any): NewAbilityName => {
  const newAbilityEntry: NewAbilityName = {
    abilityName: parseAbilityName(object.abilityName)
  }
  return newAbilityEntry
}

export default toNewAbilityEntry
