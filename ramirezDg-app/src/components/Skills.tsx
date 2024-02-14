// PostList.tsx
import React, { useEffect, useState } from 'react'

interface Skill {
  id: number
  nameAbility: string
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/info')
        if (!response.ok) {
          throw new Error('Error fetching skills')
        }
        const data = await response.json()
        setSkills(data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      }
    }

    fetchPosts()
  }, []) // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  return (
    <div className='h-screen'>
      <h2>Skills</h2>
      <ul>
        {skills.map(skills => (
          <li key={skills.id}>
            <p>{skills.nameAbility}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
