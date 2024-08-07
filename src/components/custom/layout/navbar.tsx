import { useState } from "react"
import { GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="grid justify-items-center m-5">
            <div className="flex flex-row justify-between items-center px-6 py-4 w-1/2 rounded-md shadow-md">
                <div>
                    <p className="font-black text-3xl">KALARZ</p>
                </div>

                <div className="flex flex-row space-x-6 items-center">
                    <Link to="/">Themes</Link>
                    <Link to="/">Icons</Link>
                    <Link to="/">Colors</Link>
                    <a href="https://github.com/NyawiraMuturi/theme-generator" target="_blank" rel="noopener noreferrer"><GitHubLogoIcon /> </a>
                    {
                        darkMode ? <MoonIcon className="cursor-pointer" onClick={toggleDarkMode} /> : <SunIcon className="cursor-pointer" onClick={toggleDarkMode} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
