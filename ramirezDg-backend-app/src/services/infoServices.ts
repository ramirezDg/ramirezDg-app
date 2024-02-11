
import { Habilidad, HabilidadName } from '../types'
import infoDataJson from './habilidades.json'

const info: Habilidad[] = infoDataJson as Habilidad[]

export const getInfo = (): Habilidad[] | undefined => info

export const addInfo = (): undefined => undefined

/* Services */

export const getHabilidadName = (): HabilidadName[]=> {
  return info.map(({nombreDeHabilidad})=> {
    return {nombreDeHabilidad}
  })
}
