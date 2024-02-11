export interface Habilidad { id: number, nombreDeHabilidad: string }
export type HabilidadName = Pick<Habilidad, nombreDeHabilidad>