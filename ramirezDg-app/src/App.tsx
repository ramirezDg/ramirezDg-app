import Navbar from './components/Navbar'
import Skilss from './components/Skills'
import './index.css'
import About from './pages/About'

function App (): JSX.Element {
  return (
    <>
      <main className='bg-white px-10'>
        <section className="min-h-screen">
          <Navbar />
          <About />
          <Skilss />
        </section>
      </main>
    </>
  )
}

export default App
