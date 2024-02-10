
import { Cursos, Data, Educacion, Experiencia, Habilidades } from '../types'
import infoDataJson from './_infoData'

const info: Data[] = infoDataJson

export const getInfo = (): Data[] => info

export const addInfo = (): undefined => undefined


/* Services */

export const getHabilidades = (): Habilidades[] => {
    return info.map(({habilidades}) => {
        return habilidades
    })
}

export const finByHabilidad = (tipo: Habilidades, _element: number): Data | undefined => {
    const entrada = info.find(e => e.habilidades=== tipo)
    return entrada
}
