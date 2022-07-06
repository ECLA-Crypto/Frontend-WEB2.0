import { useState } from "react";
import { Link } from "react-router-dom"
const MarketplaceNav = () => {
    const [toggle, setToggle] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className="flex items-center justify-between">
        <img src="/assets/logos/marketplace.svg" className="h-10" alt="ECLA LOGO" />
        <ul className="lg:flex hidden items-center gap-9">
            <li>
                <Link to='/eclamarket' className="text-white text-sm tracking-wide font-medium underline">Home</Link>
            </li>
            <li>
                <Link to='/eclareality' className="text-white text-sm tracking-wide font-medium">Explore</Link>
            </li>
            <li>
                <Link to='/' className="text-white text-sm tracking-wide font-medium">Developer</Link>
            </li>
        </ul>
        <ul className="lg:flex hidden items-center gap-4">
            <button className="border border-gray-100 rounded px-5 py-2 text-xs text-white">Create</button>
            <button className="px-5 py-2 text-xs text-white">Sign In</button>
        </ul>
        {toggle?<div className="w-full h-screen bg-transparent fixed top-0 left-0 flex lg:hidden z-40">
            <ul className="h-screen w-9/12 py-32 px-5 bg-gray-900 bg-opacity-75 flex flex-col gap-9">
            <li>
                <Link to='/swap' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Home
                </Link>
            </li>
            <li>
                <Link to='/eclablockchain' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Explore
                </Link>
            </li>
            <li>
                <Link to='/eclamarket' className="text-white flex items-center text-sm tracking-wide font-medium">
                    Developer
                </Link>
            </li>
            <li>
                <Link to='/eclaecosystem' className="border border-gray-100 rounded px-5 py-2 text-xs text-white">Create</Link>
            </li>
            <li>
                <Link to='/' className="px-5 py-2 text-xs text-white">Sign In</Link>
            </li>
            </ul>
            <button className="h-screen w-3/12 flex py-10" onClick={menubarOff}>
                <button onClick={menubarOff} className="absolute right-5">
                    <img src="/assets/icons/close.svg" className="h-10" alt="Menubar"/>
                </button>
            </button>
        </div> : <button className="lg:hidden block" onClick={menubarOn}>
          <img src="/assets/icons/menubar.svg" className="h-10" alt="Menubar"/>
        </button>}
    </nav>
  )
}

export default MarketplaceNav