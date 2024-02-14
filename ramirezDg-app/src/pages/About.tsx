import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import dev from '../../public/dev-ed-wave.png'

function About (): JSX.Element {
  return (
        <section className='text-center p-10'>
            <h2 className='text-5xl py-5 text-teal-600 font-medium'>Daniel Ramirez Gil</h2>
            <h3 className='text-2xl py-2'>Front-end developer.</h3>
            <p className='text-mb py-5 leading-8 text-gray-800'>Systems Engineering student with experience in multimedia design and front-end development. Seeks to expand skills, improving projects and conveying impactful ideas. Focuses on continuous learning, embracing challenges, and innovating. Aspires to specialize in web development, providing creative and efficient solutions for an exceptional user experience.</p>
            <div className='text-5xl flex justify-center gap-16 text-gray-600'>
                <AiFillInstagram />
                <AiFillLinkedin />
                <AiFillTwitterCircle />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20'>
                <img src={dev} alt='Avatar'/>
            </div>
        </section>
  )
}

export default About
