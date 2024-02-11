export type Habilidades = Pick<Data, habilidades>
export type Cursos = Pick<Data, cursos>

export interface Data {
  habilidades: string[]
  educacion: Educacion[]
  cursos: string[]
  experiencia: Experiencia[]
}

export interface Educacion {
  titulo: string
  fechaDeInicio: number
  fechaDeFin: number | string
  institucion: string
  ubicacion: string
}

export interface Experiencia {
  tipo: string
  empresa: string
  puesto: string
  fechaDeInicio: number
  fechaDeFin: number
  descripcion: string
}
