import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import Header from "../static/Header"

const Landingpage = () => {
  return (
    <>
    <div className="main_bg w-full mx-auto pt-10 spiral_bg">
        <Helmet>
          <title>ECLA Landing Page</title>
        </Helmet>
        <div className="px-5">
            <Header/>
        </div>
        <div className="mx-auto w-full h-screen flex items-center">
            <div className="flex mx-auto sm:w-9/12 w-11/12 items-center justify-between">
                <span className="md:w-1/2 w-full">
                    <h1 className="text-white sm:text-5xl text-4xl font-semibold">Welcome <br/> Home to DeFi.</h1>
                    <p className="text-xs text-gray-300 mt-4">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex mt-7 gap-5 flex-wrap">
                        <button className="connect_btn px-7 py-2.5 text-white text-sm">Connect Wallet</button>
                        <Link to='/swap' className="trade px-7 py-2.5 text-white text-sm">Trade</Link>
                    </span>
                </span>
                <span className="w-1/2 justify-end items-center md:flex hidden">
                    <img src="/assets/herologo.svg" className="h-72" alt="ECLA Swap"/>
                </span>
            </div>
        </div>
        <div className="mt-7 w-fulll">
            <div className="w-4/5 mx-auto text-center justify-center flex-col items-center flex text-white">
                <h2 className="font-semibold text-3xl">Feel Comfortable</h2>
                <p className="mt-4 text-sm text-gray-300">Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
                <span className="flex md:gap-16 xl:gap-20 gap-10 justify-between mt-10 flex-wrap">
                    <span className="flex flex-col justify-center items-center w-1/3 md:w-fit">
                        <h2 className="font-semibold text-3xl text_color">$500M+</h2>
                        <p className="text-xs mt-1 text_color">Trade Volume</p>
                    </span>
                    <span className="flex flex-col justify-center items-center w-1/3 md:w-fit">
                        <h2 className="font-semibold text-3xl">$72M+</h2>
                        <p className="text-xs mt-1 text-gray-300">All Time Traders</p>
                    </span>
                    <span className="flex flex-col justify-center items-center w-1/3 md:w-fit">
                        <h2 className="font-semibold text-3xl">$500+</h2>
                        <p className="text-xs mt-1 text-gray-300">Integrations</p>
                    </span>
                    <span className="flex flex-col justify-center items-center w-1/3 md:w-fit">
                        <h2 className="font-semibold text-3xl">$300M+</h2>
                        <p className="text-xs mt-1 text-gray-300">Community Delegates</p>
                    </span>
                </span>
            </div>
        </div>
        <div className="mt-20 w-full time_bg py-20">
            <div className="sm:w-4/5 w-11/12 mx-auto flex justity-between items-center">
                <span className="sm:w-1/2 w-full">
                    <h1 className="text-3xl trade_title font-medium">Trade Seamlessly <br/> like you're home.</h1>
                    <p className="mt-3 text-gray-300 text-xs">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex sm:gap-10 gap-4 items-center mt-6 text-white text-sm flex-wrap">
                        <Link to='/swap' className="py-2.5 px-7 trade">Trade</Link>
                        <button className="py-2.5 px-7 border border-white rounded-full">Download Wallet</button>
                    </span>
                </span>
                <span className="w-1/2 hidden sm:flex justify-end">
                   <img src="/assets/logos/bbelogo.svg" className="h-60" alt="BBE Logo" />
                </span>
            </div>
        </div>
        <div className="mt-20 w-full py-20 time_bg">
            <div className="sm:w-4/5 w-11/12 mx-auto flex sm:flex-row flex-col justity-between items-center">
                <span className="sm:w-1/2 w-full">
                    <h1 className="text-3xl trade_title font-medium">An evolving community <br/> for an evolving DeFi <br/> landscape</h1>
                    <p className="mt-3 text-gray-300 text-xs">Swap, earn, and build on the leading decentralized <br/> crypto trading protocol.</p>
                    <span className="flex sm:gap-10 gap-4 items-center mt-6 text-white text-sm flex-wrap">
                        <Link to='/swap' className="py-2.5 px-7 trade">Trade</Link>
                        <Link to="https://discord.gg/NH3QBa4p" className="py-2.5 px-7 border border-white rounded-full">Join Our Community</Link>
                    </span>
                </span>
                <span className="w-1/2 sm:flex hidden justify-end">
                   <img src="/assets/logos/eclaRingLogo.svg" className="h-72" alt="Ecla Logo" />
                </span>
            </div>
        </div>
        <div className="mt-20 mb-20 xl:w-9/12 w-11/12 mx-auto py-7 rounded-lg start_bg">
            <div className="xl:w-4/5 w-full px-5 mx-auto flex sm:flex-row flex-col justify-between items-center">
                <span className="sm:w-1/2 w-11/12 flex">
                   <img src="/assets/logos/groupLogo.svg" className="h-32 sm:h-40 mx-auto" alt="BBE Logo" />
                </span>
                <span className="sm:w-1/3 w-11/12 sm:block sm:mt-0 flex justify-center flex-col items-center mt-3">
                    <h1 className="text-3xl trade_title font-medium">Start trading <br/> in seconds</h1>
                    <span className="flex gap-10 items-center mt-6 text-white text-sm">
                        <button className="py-2.5 px-7 border border-white rounded-full">Connect Wallet</button>
                    </span>
                </span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landingpage