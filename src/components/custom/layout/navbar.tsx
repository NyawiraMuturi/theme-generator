import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="bg-gray-50 flex flex-row justify-between items-center px-4 py-2">
            <div>
                <p>KALARZ</p>
            </div>

            <div className="flex flex-row space-x-4">
                <Link to="/">Themes</Link>
                <Link to="/">Icons</Link>
                <Link to="/">Colors</Link>
                <GitHubLogoIcon />
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default Navbar
