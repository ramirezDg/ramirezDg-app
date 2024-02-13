import { IoIosArrowDropdown } from "react-icons/io";

function Home() {
    return (
        <section className='h-auto py-20 mt-36 text-center'>
            
            <h2 className="text-4xl font-semibold uppercase text-neutral-900">Daniel Ramirez Gil</h2>
            <h3 className="text-xl text-neutral-500">Front-End Developer</h3>
            <div className="flex justify-center ">
            <IoIosArrowDropdown className="animate-bounce text-4xl cursor-pointer mt-4"/>
            </div>

        </section>
    )
}

export default Home