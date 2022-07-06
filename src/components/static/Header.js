import { useState, Fragment } from "react";
import { Link } from "react-router-dom"
import { Menu, Transition } from '@headlessui/react'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [connected, setConnected] = useState(false)
    const menubarOn = () => {
        setToggle(true);
    }
    const menubarOff = () => {
        setToggle(false)
    }
  return (
    <nav className={`flex justify-between`}>
        <div className="flex items-center gap-6">
            <Link to='/'>
                <img src="/assets/logos/swapLogo.svg" alt="ECLA LOGO" />
            </Link>
            <ul className="lg:flex hidden items-center gap-3">
                {/* <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Resources</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Getting Started</strong><br/>Developer resources</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>NFTs</strong><br/>Mint, sell and trade NFTs at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DEFI</strong><br/>Low fees.Low latency.Capital efficiency</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Gaming</strong><br/>Web3 games, Web2 speeds</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Payments</strong><br/>Decentralized payments at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DAOS</strong><br/>Governance that just works</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Learning</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>EClA cookbook</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLADev</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Metaplex Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Careers</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>See available positions</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Guides & Tutorials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Figment Learn</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Questionable x superteam</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to Building ECLA Programs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into To Anchor Framework</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>A Guide to Full Stack Development on ECLA</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to ECLA Blockchain Concepts</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu> */}
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Network <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-top-left absolute left-0 dropdown_content focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Inspect</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Eclascan</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Explore</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLAbeach</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake Distribution</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Status</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Network Status</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Email Alerts</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-1/4">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Interact</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Environment</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>RPC Providers</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Menu as="div" className="text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Ecosystem <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                </div>
                <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="origin-top-left absolute focus:outline-none flex ecosys_dropdown justify-between py-5 mt-2 flex-wrap px-5 z-40">
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
            </ul>
        </div>
        <div className="flex justify-center items-center lg:flex hidden">
            {connected? 
            <div className="flex items-center gap-5">
                <select id="countries_disabled" class="auth_btn border-0 text-gray-100 text-sm rounded-lg block p-2.5">
                    <option value="eth" className="font-semibold mt-5" selected>Ethereum</option>
                    <option value="bnb" className="font-semibold">Binance</option>
                    <option value="matic-network" className="font-semibold">Polygon</option>
                </select>
                <strong className="text-gray-300 text-sm ml-5">0 BNB</strong><button onClick={()=>setConnected(false)} className="auth_btn text-gray-300 font-semibold px-4 py-1.5 rounded flex gap-3 items-center text-sm">0xa50b...de5152<img src="/assets/clipboard.svg" className="rounded-full w-6 h-6" alt="Profile"/></button></div> 
                : <button onClick={()=>setConnected(true)} className="text-white font-semibold text-sm cursor-pointer auth_btn px-5 py-1.5 rounded flex justify-center items-center"><img src="/assets/icons/eclaWallet.svg" className="w-8 h-8 mr-3" alt="Wallet Icon"/> Connect Wallet</button>
            }
        </div>
        {toggle?<div className="w-full h-screen fixed top-0 left-0 z-40 flex lg:hidden">
            <ul className="h-screen w-9/12 py-20 bg-gray-900 bg-opacity-90 flex flex-col gap-9 overflow-y-auto">
                {/* <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Developer <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between py-5 flex-wrap px-5 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Resources</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Getting Started</strong><br/>Developer resources</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>NFTs</strong><br/>Mint, sell and trade NFTs at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DEFI</strong><br/>Low fees.Low latency.Capital efficiency</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Gaming</strong><br/>Web3 games, Web2 speeds</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>Payments</strong><br/>Decentralized payments at scale</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'><strong>DAOS</strong><br/>Governance that just works</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Learning</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA cookbook</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLADev</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLA Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Metaplex Docs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold pt-8 pb-2 text-sm capitalize'>Careers</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block text-sm font-medium'>See available positions</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 mt-5 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Guides & Tutorials</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Figment Learn</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Questionable x superteam</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to Building ECLA Programs</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into To Anchor Framework</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>A Guide to Full Stack Development on ECLA</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Into to ECLA Blockchain Concepts</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu> */}
                <Menu as="div" className="text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-start items-center w-full rounded-md  shadow-sm px-4 py-2 text-sm font-medium text-gray-100">Network <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span></Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-full focus:outline-none flex justify-between py-5 flex-wrap px-5 mt-2 z-40">
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Inspect</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Eclascan</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Explore</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>ECLAbeach</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Stake Distribution</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Status</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Network Status</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Email Alerts</Link>
                                </Menu.Item>
                            </div>
                            <div className="py-1 w-full">
                                <Menu.Item>
                                    <h4 className='text-gray-400 block text-lg font-semibold py-2 text-sm capitalize'>Interact</h4>
                                </Menu.Item>
                                <Menu.Item>
                                    <hr className="border-gray-400 py-3"/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>Environment</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to='' className='text-gray-300 block py-2 text-sm font-medium'>RPC Providers</Link>
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
                <li>
                {connected? 
                    <div className="flex flex-col w-full gap-5 pl-5">
                        <select id="countries_disabled" class="auth_btn border-0 w-fit text-gray-100 text-sm rounded-lg block p-2.5">
                            <option value="eth" className="font-semibold mt-5" selected>Ethereum</option>
                            <option value="bnb" className="font-semibold">Binance</option>
                            <option value="matic-network" className="font-semibold">Polygon</option>
                        </select>
                        <strong className="text-gray-300 text-sm ml-5">0 BNB</strong><button onClick={()=>setConnected(false)} className="w-fit auth_btn text-gray-300 font-semibold px-4 py-1.5 rounded flex gap-3 items-center text-sm">0xa50b...de5152<img src="/assets/clipboard.svg" className="rounded-full w-6 h-6" alt="Profile"/></button></div> 
                        : <button onClick={()=>setConnected(true)} className="ml-5 text-white font-semibold text-sm cursor-pointer auth_btn px-5 py-1.5 rounded flex justify-center items-center"><img src="/assets/icons/eclaWallet.png" className="w-8 h-8 mr-3" alt="Wallet Icon"/> Connect Wallet</button>
                    }
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
export default Header