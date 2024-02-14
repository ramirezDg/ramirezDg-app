interface Skill {
  id: number
  nameAbility: string
}

type ListOfSkills = Skill[]

interface Props {
  skills: ListOfSkills
}

export const Skill: React.FC<Props> = ({ skills }) => {
  return (
        <ul>
            {
                skills.map(skill => {
                    <li key={skill.id}>{skill.nameAbility}</li>
                })
            }
        </ul>
  )
}
