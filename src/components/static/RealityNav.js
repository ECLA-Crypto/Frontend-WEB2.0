import { useState, Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'
const RealityNav = () => {
    const [toggle, setToggle] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className={`flex justify-between`}>
        <div className="flex items-center gap-10">
            <Link to='/'>
                <img src="/assets/logos/realityLogo.svg" className="h-8" alt="ECLA LOGO" />
            </Link>
        </div>
        <ul className="lg:flex hidden items-center gap-3">
            {/* Developer */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700">Developer <span><img src="/assets/icons/darkdownchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none bg-gray-300 py-2 mt-2 flex justify-between flex-wrap px-5 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>Build on ECLA</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>Documentation</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>Our SDK</Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            {/* Ecosystem */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700">Ecosystem <span><img src="/assets/icons/darkdownchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex bg-gray-300 py-2 mt-2 justify-between flex-wrap px-5 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Swap</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclamarket' className='text-gray-900 block py-2 text-sm font-medium'>Market Place</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclareality' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Reality</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Bridge</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            {/* Community */}
            <Menu as="div" className="text-left">
                <div>
                    <Link to='' className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700">Community</Link>
                </div>
            </Menu>
            {/* Learn */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700">Learn <span><img src="/assets/icons/darkdownchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex justify-between bg-gray-300 py-2 mt-2 flex-wrap px-5 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Swap</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclamarket' className='text-gray-900 block py-2 text-sm font-medium'>Market Place</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclareality' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Reality</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>ECLA Bridge</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-900 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </ul>
        {toggle?<div className="w-full h-screen fixed top-0 left-0 flex lg:hidden">
            <ul className="h-screen w-9/12 py-20 bg-gray-900 bg-opacity-90 flex flex-col gap-4 overflow-y-auto">
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Build on ECLA</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Documentation</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Our SDK</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Ecosystem <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Swap</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclamarket' className='text-gray-300 block py-2 text-sm font-medium'>Market Place</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclareality' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Reality</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Bridge</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/' className='text-gray-300 block py-2 text-sm font-medium'>Ecosystem</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <li>
                    <Link to='/' className="text-white text-sm tracking-wide font-medium px-4">Community</Link>
                </li>
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Learn <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-ful focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </ul>
            <button className="h-screen w-3/12 flex py-10" onClick={menubarOff}>
                <button onClick={menubarOff} className="absolute right-5">
                    <img src="/assets/icons/darkclose.svg" className="h-10" alt="Menubar"/>
                </button>
            </button>
        </div> : <button className="lg:hidden block" onClick={menubarOn}>
          <img src="/assets/icons/darkMenubar.svg" className="h-10" alt="Menubar"/>
        </button>}
    </nav>
  )
}
export default RealityNav