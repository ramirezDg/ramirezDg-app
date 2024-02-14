import { useFetch } from '../utils/useFetch'

const Skilss: React.FC = () => {
  const { data } = useFetch<Ability[]>('http://localhost:3000/api/info')
  return (
    <section className='h-screen'>
      <h3 className="text-3xl py-1">Skills</h3>
      <ul>
          {
            data?.map((e) => (
              <li className='text-blue-700' key={e.id}>{e.nameAbility}</li>
            ))
          }
      </ul>
    </section>
  )
}

export default Skilss
