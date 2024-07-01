import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
                <div><img src="assets\Logo.svg" alt="logo" /></div>
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
            </div>
            <ul className="hidden lg:flex justify-between items-center font-serif text-gray-400 gap-6">
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domains</a></li>
                <li><a href="#">My Hoster</a></li>
            </ul>
            <div className="hidden lg:flex justify-center font-serif gap-6">
                <a className="text-gray-400" href="#">Sign In</a>
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Join Waitlist</button>
            </div>
            <div className="lg:hidden">
                <FaBars />
            </div>
        </div>

    )
}

export default Header;

