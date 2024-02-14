import { FaMoon } from 'react-icons/fa'

function Navbar (): JSX.Element {
  return (
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className='text-xl font-semibold select-none'>ramirezDg</h1>
        <ul className='flex items-center'>
            <li><FaMoon className='cursor-pointer'/></li>
            <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
            </li>
        </ul>
      </nav>
  )
}

export default Navbar
