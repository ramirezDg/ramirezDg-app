import { FaMoon } from "react-icons/fa6";

function Navbar() {
    return (
        <>
        <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">ramirezDg</h1>
            <ul className="font-semibold flex items-center">
                <li className="cursor-pointer text-2xl" ><FaMoon /></li>
                <li><a className="ml-4" href="#">Home</a></li>
                <li><a className="ml-4" href="#">About Me</a></li>
                <li><a className="ml-4" href="#">Projects</a></li>
                <li><a className="bg-neutral-100 px-4 py-2 ml-3 borede" href="#">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar