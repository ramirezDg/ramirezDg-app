// types.d.ts
export type ExperienciaType = 'Laboral' | 'Academica' | 'Independiente'
export type FechaFin = number | 'Actualmente'
export interface EducacionItem {
    titulo: string;
    fechaDeInicio: string;
    fechaDeFin: FechaFin;
    institucion: number;
    ubicacion: string;
  }
  
export interface ExperienciaItem {
    tipo: ExperienciaType;
    empresa: string;
    puesto: string;
    fechaDeInicio: number;
    fechaDeFin: FechaFin;
    descripcion: string;
  }
  
  export interface InfoJson {
    habilidades: string[];
    educacion: EducacionItem[];
    cursos: string[];
    experiencia: ExperienciaItem[];
  }
  
/*   declare const nuevoJson: NuevoJson;
  export default nuevoJson; */
  