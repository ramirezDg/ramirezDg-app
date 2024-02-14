import { useState } from 'react'

const listSkills = [{ id: 1, nameAbility: 'Mesa de Soporte Técnico' }, { id: 2, nameAbility: 'Soporte A Usuarios' }, { id: 3, nameAbility: 'React' }, { id: 4, nameAbility: 'JavaScript' }, { id: 5, nameAbility: 'TypeScript' }, { id: 6, nameAbility: 'Figma' }, { id: 7, nameAbility: 'Java SE' }, { id: 8, nameAbility: 'Adobe Illustrator' }, { id: 9, nameAbility: 'Html' }, { id: 10, nameAbility: 'Css' }, { id: 11, nameAbility: 'Adobe Photoshop' }, { id: 12, nameAbility: 'Sass' }, { id: 13, nameAbility: 'Linux' }, { id: 14, nameAbility: 'Git' }]

const Skills: React.FC = () => {
  const [skils] = useState(listSkills)
  return (
    <section className='h-screen'>
      <h3 className="text-3xl py-1">Skills</h3>
      <ul>
          <Skill skills={skills}/>
      </ul>
    </section>
  )
}

export default Skills
