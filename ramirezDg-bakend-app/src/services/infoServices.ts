
import { InfoJson } from '../types'
import infoData from './info.json'

const info: Array<InfoJson> = infoData as Array<InfoJson>

export const getInfo = () => info

export const addInfo = () => undefined