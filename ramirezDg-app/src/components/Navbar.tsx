import { FaMoon } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <nav className="py-10 mb-12 flex justify-between">
                <h1 className="text-xl text-cyan-950">ramirezDg</h1>
                <ul className="font-semibold text-neutral-900 flex items-center">
                    <li className="cursor-pointer text-2xl text-cyan-950" ><FaMoon /></li>
                    <li><a className="ml-6" href="#">Home</a></li>
                    <li><a className="ml-6" href="#">About Me</a></li>
                    <li><a className="ml-6" href="#">Projects</a></li>
                    <li><a className="bg-neutral-100 px-4 py-2 ml-3 border-2 border-cyan-950 rounded-md" href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar