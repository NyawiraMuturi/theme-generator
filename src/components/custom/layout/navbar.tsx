import { GitHubLogoIcon, SunIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="grid justify-items-center m-5">
            <div className="flex flex-row justify-between items-center px-6 py-4 w-1/2 rounded-md shadow-md">
                <div>
                    <p>KALARZ</p>
                </div>

                <div className="flex flex-row space-x-6 items-center">
                    <Link to="/">Themes</Link>
                    <Link to="/">Icons</Link>
                    <Link to="/">Colors</Link>
                    <Link to="/"><GitHubLogoIcon /></Link>
                    <SunIcon className="cursor-pointer" onClick={() => { alert("dark mode") }} />

                </div>
            </div>
        </div>

    )
}

export default Navbar
