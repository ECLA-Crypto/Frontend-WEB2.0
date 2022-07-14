import { useState, Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'
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
        <img src="/assets/logos/marketplace.svg" className="h-8 sm:h-10" alt="ECLA LOGO" />
        <ul className="lg:flex hidden items-center gap-9">
            <li>
                <Link to='/eclamarket' className="text-white text-sm tracking-wide font-medium underline">Explore</Link>
            </li>
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Ecosystem <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex ecosys_dropdown justify-between mt-2 flex-wrap px-5 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='/' className='text-gray-300 block py-2 text-sm font-medium'>Getting Started</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/swaplanding' className='text-gray-300 block py-2 text-sm font-medium'>ECLA DEx</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclamarket' className='text-gray-300 block py-2 text-sm font-medium'>NFT Marketplace</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclareality' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Reality</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Bridge</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{pathname:'/swap', state: {connectPage: 'staking'} }} className='text-gray-300 block py-2 text-sm font-medium flex items-center gap-3'><img src='/assets/icons/eclaStack.png' className='w-5 h-5' alt='Stake logo'/>Stake ECLA</Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            {/* Community */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Community <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                        <div className="py-1 w-1/4">
                            <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Community</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            {/* <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                            </Menu.Item> */}
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                            </Menu.Item>
                            {/* <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                            </Menu.Item> */}
                        </div>
                        <div className="py-1 w-1/4">
                            <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Content</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>News</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Prodcast</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Youtube</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Newsletter</Link>
                            </Menu.Item>
                        </div>
                        <div className="py-1 w-1/4">
                            <Menu.Item>
                                <h4 className='text-gray-400 flex gap-2 text-lg font-semibold py-2 text-sm capitalize'>Socials</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://twitter.com/EclaEcosystem' rel="noreferrer" target="_blank" className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/twitter.svg" className="h-5" alt="Twitter"/>Twitter</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://discord.gg/4YfWcEwkeG' target="_blank" rel="noreferrer" className='text-gray-300 flex gap-2 py-2 text-sm font-medium'><img src="/assets/icons/discord.svg" className="h-5" alt="Discord"/>Discord</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://reddit.com/r/eclaecosystem' target="_blank" rel="noreferrer" className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/reddit.svg" className="h-5" alt="Reddit"/>Reddit</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://t.me/eclaecosystem' target="_blank" rel="noreferrer" className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/telegram.svg" className="h-5" alt="Telegram"/>Telegram</a>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </ul>
        <ul className="lg:flex hidden items-center gap-4">
            <button className="border border-gray-100 rounded px-5 py-2 text-xs text-white">Create</button>
            <button className="ml-5 text-white font-semibold text-sm cursor-pointer auth_btn px-5 py-1.5 rounded flex justify-center items-center"><img src="/assets/icons/eclaWallet.png" className="w-8 h-8 mr-3" alt="Wallet Icon"/> Connect Wallet</button>
        </ul>
        {toggle?<div className="w-full h-screen fixed top-0 left-0 flex lg:hidden z-40">
            <ul className="h-full w-9/12 py-20 bg-gray-900 bg-opacity-90 z-40 flex flex-col gap-3 overflow-y-auto">
            <li>
                <Link to='/swap' className="text-white flex items-center text-sm tracking-wide font-medium ml-4">
                    Explore
                </Link>
            </li>
            {/* Ecosystem */}
            <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Ecosystem <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-ful focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                            <Menu.Item>
                                <Link to='/' className='text-gray-300 block py-2 text-sm font-medium'>Getting Started</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/swaplanding' className='text-gray-300 block py-2 text-sm font-medium'>ECLA DEx</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclamarket' className='text-gray-300 block py-2 text-sm font-medium'>NFT Marketplace</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/eclareality' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Reality</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Bridge</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{pathname:'/swap', state: {connectPage: 'staking'} }} className='text-gray-300 block py-2 text-sm font-medium flex items-center gap-3'><img src='/assets/icons/eclaStack.png' className='w-5 h-5' alt='Stake logo'/>Stake ECLA</Link>
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            {/* Community */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Community <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="w-ful focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                        <div className="py-1 w-full">
                            <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Community</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            {/* <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                            </Menu.Item> */}
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                            </Menu.Item>
                            {/* <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                            </Menu.Item> */}
                        </div>
                        <div className="py-1 w-full">
                            <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Content</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>News</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Prodcast</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Youtube</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Newsletter</Link>
                            </Menu.Item>
                        </div>
                        <div className="py-1 w-full">
                            <Menu.Item>
                                <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Socials</h4>
                            </Menu.Item>
                            <Menu.Item>
                                <hr className="border-gray-400 py-3"/>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://twitter.com/EclaEcosystem' rel="noreferrer" target="_blank" className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/twitter.svg" className="h-5 mr-2" alt="Twitter"/>Twitter</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://discord.gg/4YfWcEwkeG' rel="noreferrer" target="_blank" className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/discord.svg" className="h-5 mr-2" alt="Discord"/>Discord</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://reddit.com/r/eclaecosystem' rel="noreferrer" target="_blank" className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/reddit.svg" className="h-5 mr-2" alt="Reddit"/>Reddit</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a href='https://t.me/eclaecosystem' rel="noreferrer" target="_blank" className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/telegram.svg" className="h-5 mr-2" alt="Telegram"/>Telegram</a>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <li className="mt-5">
                <Link to='/' className="border border-gray-100 rounded px-5 py-2 text-xs text-white ml-4 mt-3">Create</Link>
            </li>
            <li className="mt-5">
                <button className="ml-5 text-white font-semibold text-sm cursor-pointer auth_btn px-5 py-1.5 rounded flex justify-center items-center"><img src="/assets/icons/eclaWallet.png" className="w-8 h-8 mr-3" alt="Wallet Icon"/> Connect Wallet</button>
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