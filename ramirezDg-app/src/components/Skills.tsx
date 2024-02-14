// PostList.tsx
import React, { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'

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
      <ul className='flex text-center p-5'>
        {skills.map(skills => (
          <li key={skills.id} >
            <span className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-sm font-medium text-cyan-600 ring-1 ring-inset ring-blue-700/10 select-none">{skills.nameAbility}
            <IoIosClose className='ml-2 cursor-pointer'/>
            </span>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
