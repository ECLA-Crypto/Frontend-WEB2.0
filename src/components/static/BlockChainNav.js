import { useState, Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'
const BlockChainNav = () => {
    const [toggle, setToggle] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className={`flex justify-between items-center`}>
        <div className="flex items-center gap-10">
            <Link to='/'>
                <img src="/assets/logos/ECLABlockChainLogo.svg" className="h-8" alt="ECLA LOGO" />
            </Link>
        </div>
        <ul className="lg:flex hidden items-center gap-3">
            {/* Developer */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none ecosys_dropdown flex justify-between flex-wrap mt-2 px-5 z-40">
                        <div className="py-1">
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
            {/* Ecosystem */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Ecosystem <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex ecosys_dropdown justify-between mt-2 flex-wrap px-5 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='/eclaecosystem' className='text-gray-300 block py-2 text-sm font-medium'>Getting Started</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Swap</Link>
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
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake</Link>
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
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Breakpoint</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                                </Menu.Item>
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
                                    <a href='https://twitter.com/EclaEcosystem' className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/twitter.svg" className="h-5" alt="Twitter"/>Twitter</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://discord.gg/4YfWcEwkeG' className='text-gray-300 flex gap-2 py-2 text-sm font-medium'><img src="/assets/icons/discord.svg" className="h-5" alt="Discord"/>Discord</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://reddit.com/r/eclaecosystem' className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/reddit.svg" className="h-5" alt="Reddit"/>Reddit</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://t.me/eclaecosystem' className='text-gray-300 flex gap-2 py-2 text-sm font-medium'> <img src="/assets/icons/telegram.svg" className="h-5" alt="Telegram"/>Telegram</a>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            {/* Learn */}
            <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Learn <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex ecosys_dropdown justify-between mt-2 flex-wrap px-4 z-40">
                        <div className="py-1">
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Swap</Link>
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
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </ul>
        {toggle?
        <div className="w-full h-screen fixed top-0 left-0 flex lg:hidden z-40">
            <ul className="h-full w-9/12 py-20 bg-gray-900 bg-opacity-90 z-40 flex flex-col gap-3 overflow-y-auto">
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Build On ECLA</Link>
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
                        <Menu.Items className="w-ful focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                            <Menu.Item>
                                <Link to='/eclaecosystem' className='text-gray-300 block py-2 text-sm font-medium'>Getting Started</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Swap</Link>
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
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
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
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Home</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Events</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Breakpoint</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Branding</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Collective</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>Join the collective</Link>
                                </Menu.Item>
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
                                    <a href='https://twitter.com/EclaEcosystem' className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/twitter.svg" className="h-5 mr-2" alt="Twitter"/>Twitter</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://discord.gg/4YfWcEwkeG' className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/discord.svg" className="h-5 mr-2" alt="Discord"/>Discord</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://reddit.com/r/eclaecosystem' className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/reddit.svg" className="h-5 mr-2" alt="Reddit"/>Reddit</a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href='https://t.me/eclaecosystem' className='text-gray-300 flex items-center py-2 text-sm font-medium'><img src="/assets/icons/telegram.svg" className="h-5 mr-2" alt="Telegram"/>Telegram</a>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                {/* Learn */}
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Learn <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-ful focus:outline-none flex justify-between flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                            <Menu.Item>
                                <Link to='/eclaecosystem' className='text-gray-300 block py-2 text-sm font-medium'>Getting Started</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/swap' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Swap</Link>
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
                                <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake</Link>
                            </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </ul>
            <button className="h-screen w-3/12 flex py-10" onClick={menubarOff}>
                <button onClick={menubarOff} className="absolute right-5">
                    <img src="/assets/icons/close.svg" className="h-10" alt="Menubar"/>
                </button>
            </button>
        </div> : <button className="lg:hidden block" onClick={menubarOn}>
          <img src="/assets/icons/menubar.svg" className="h-10" alt="Menubar"/>
        </button>
        }
    </nav>
  )
}
export default BlockChainNav