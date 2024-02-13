import { IoIosClose } from "react-icons/io";

function AboutMe() {
    return (
        <section className="h-screen">
            <div className="grid grid-cols-2 gap-1">
                <div className="">
                    <h1 className="font-semibold">About Me</h1>
                    <p>
                        Systems Engineering student with experience in multimedia design and user interfaces, focused on front-end development. I am seeking to expand my skills to enhance the quality of projects, convey ideas impactfully, and achieve challenging goals. My approach revolves around embracing new challenges, continuously learning, and contributing to the success of innovative projects. I aspire to solidify my position as a web development specialist, providing creative and efficient solutions that deliver an exceptional user experience.
                    </p>
                </div>
                <div className="" id="Skills">
                        <div className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            <p className="select-none">
                                
                            </p>
                             <span className="ml-2 text-xl text-blue-700 cursor-pointer" onclick="cerrarBadge()"><IoIosClose/></span>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe