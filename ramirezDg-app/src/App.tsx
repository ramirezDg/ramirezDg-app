// import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import SocialM from './components/SocialM'

function App() {
  /* const [data, setData] = useState(0) */

  return (
    <>
      <main className='bg-neutral-100 px-10 text-lg min-h-screen'>
        <Navbar/ >
        <Home />
      </main>
    </>
  )
}

export default App
