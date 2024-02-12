'use strict'
const __rest = (this && this.__rest) || function (s, e) {
  const t = {}
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) { t[p] = s[p] }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) { t[p[i]] = s[p[i]] }
    }
  }
  return t
}
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.finById_name = exports.getAbilityName = exports.addInfo = exports.getInfo = void 0
const ability_json_1 = __importDefault(require('./ability.json'))
const info = ability_json_1.default
/* Consulta Todo Ee Json */
const getInfo = () => info
exports.getInfo = getInfo
const addInfo = (newAbilityName) => {
  const newEntry = {
    id: Math.max(...info.map(d => d.id)) + 1,
    nameAbility: newAbilityName
  }
  info.push(newEntry)
  return newEntry
}
exports.addInfo = addInfo
/* Services */
/* Lista de habilidades Solo Nombre */
const getAbilityName = () => {
  return info.map((nameAbility) => {
    return nameAbility
  })
}
exports.getAbilityName = getAbilityName
/* Buscar por Id */
const finById_name = (id) => {
  const entry = info.find(d => d.id === id)
  if (entry != null) {
    const { id } = entry; const restOfAbility = __rest(entry, ['id'])
    return restOfAbility
  }
  return undefined
}
exports.finById_name = finById_name
