import { Link } from "react-router-dom"
import RealityNav from "../static/RealityNav"

const EclaReality = () => {
  return (
    <div className="w-full bg-white">
        <div className="w-full pt-10 sm:pb-32 pb-20 h-screen man_image">
            <div className="w-10/12 flex h-full flex-col justify-between  mx-auto">
                <RealityNav />
                <span>
                    <h1 className="font-bold text-3xl sm:text-5xl tracking-widest reality_header_title">WELCOME TO <br/> REAL-GINATION.</h1>
                    <p className="reality_header_title text-sm md:mt-5 lg:mt-7 sm:w-4/5 md:w-3/5 lg:w-3/5">Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
                    <button className="px-10 py-2.5 text-white sm:mt-9 mt-5 connect_btn text-xs sm:text-sm font-semibold">Get Started</button>
                </span>
            </div>
        </div>
        <div className="w-full py-10 h-screen space">
            <div className="w-10/12 flex h-full flex-col justify-between mx-auto">
                <span className="my-auto text-white">
                    <h1 className="font-bold sm:text-7xl text-5xl capitalize">ECLA Verse.</h1>
                    <h1 className="font-bold sm:text-3xl text-xl sm:mt-7 mt-5 w-4/5 xl:w-2/6">Begin a visit to your imagination</h1>
                    <p className="text-sm mt-5 sm:mt-7 font-medium w-4/6 xl:w-2/6">Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
                    <button className="px-10 py-2.5 text-white sm:mt-9 mt-5 connect_btn text-xs sm:text-sm font-semibold">Explore</button>
                </span>
            </div>
        </div>
        <div className="w-full py-10 h-screen create">
            <div className="w-10/12 flex h-full justify-between  mx-auto">
                <span className="my-auto text-white flex justify-between items-center w-full">
                    <span>
                        <h1 className="font-bold sm:text-7xl text-5xl capitalize reality_header_title">Create.</h1>
                        <h1 className="font-bold text-3xl mt-7 reality_header_title w-4/5">Bring your own world to reality</h1>
                        <p className="text-sm mt-5 sm:mt-7 font-medium w-4/6 xl:w-4/6 reality_header_title">Swap, earn, and build on the leading decentralized crypto trading protocol.</p>
                        <button className="px-10 py-2.5 text-white sm:mt-9 mt-5 connect_btn text-xs sm:text-sm font-semibold">Start Creating</button>
                    </span>
                    <span>
                        <img src="/assets/spiral2.png" className="h-30 md:block hidden" alt="spiral"/>
                    </span>
                </span>
            </div>
        </div>
        <div className="w-full py-10 reality_footer_bg">
            <div className="w-10/12 flex h-full justify-between flex-col mx-auto">
                <img src="/assets/logos/eclaReality.svg" className="mx-auto mt-20" alt="Ecla Reality"/>
                <span className="mb-10">
                    <span className="flex gap-10 text-white underline">
                        <Link to='/' className="active">Explore</Link>
                        <Link to='/'>Create</Link>
                        <Link to='/'>Trade</Link>
                    </span>
                    <p className="text-xs text-white w-72 mt-2">Lörem ipsum orat vivis i kosam desk om än nände. Lasm proktig, prefalogi autore. Orade biopålingar och replar til. Iligt osk. Od dohåhåvis hast nisa.</p>
                </span>
                <span className="flex overflow-x-auto gap-10">
                    <span className="rounded-lg bg-gray-600 px-7 py-6 xl:w-4/12 md:w-4/12 sm:w-5/12 w-11/12 mx-auto geometric_bg">
                        <div className="h-48 w-56"></div>
                        <div>
                            <h3 className="text-white font-semibold w-full">Bring your own world to reality</h3>
                            <span className="flex justify-between items-center">
                                <small className="text-xs text-white">Lorem ipsum arat vivis</small>
                                <img src="/assets/rightArrow.png" alt="Right Arrow" className="h-7"/>
                            </span>
                        </div>
                    </span>
                    <span className="rounded-lg bg-gray-600 px-7 py-6 xl:w-4/12 md:w-4/12 sm:w-5/12 w-11/12 mx-auto geometric_bg">
                        <div className="h-48 w-56"></div>
                        <div>
                            <h3 className="text-white font-semibold w-full">Bring your own world to reality</h3>
                            <span className="flex justify-between items-center">
                                <small className="text-xs text-white">Lorem ipsum arat vivis</small>
                                <img src="/assets/rightArrow.png" alt="Right Arrow" className="h-7"/>
                            </span>
                        </div>
                    </span>
                    <span className="rounded-lg bg-gray-600 px-7 py-6 xl:w-4/12 md:w-4/12 sm:w-5/12 w-11/12 mx-auto geometric_bg">
                        <div className="h-48 w-56"></div>
                        <div>
                            <h3 className="text-white font-semibold w-full">Bring your own world to reality</h3>
                            <span className="flex justify-between items-center">
                                <small className="text-xs text-white">Lorem ipsum arat vivis</small>
                                <img src="/assets/rightArrow.png" alt="Right Arrow" className="h-7"/>
                            </span>
                        </div>
                    </span>
                    <span className="rounded-lg bg-gray-600 px-7 py-6 xl:w-4/12 md:w-4/12 sm:w-5/12 w-11/12 mx-auto geometric_bg">
                        <div className="h-48 w-56"></div>
                        <div>
                            <h3 className="text-white font-semibold w-full">Bring your own world to reality</h3>
                            <span className="flex justify-between items-center">
                                <small className="text-xs text-white">Lorem ipsum arat vivis</small>
                                <img src="/assets/rightArrow.png" alt="Right Arrow" className="h-7"/>
                            </span>
                        </div>
                    </span>
                    <span className="rounded-lg bg-gray-600 px-7 py-6 xl:w-4/12 md:w-4/12 sm:w-5/12 w-11/12 mx-auto geometric_bg">
                        <div className="h-48 w-56"></div>
                        <div>
                            <h3 className="text-white font-semibold w-full">Bring your own world to reality</h3>
                            <span className="flex justify-between items-center">
                                <small className="text-xs text-white">Lorem ipsum arat vivis</small>
                                <img src="/assets/rightArrow.png" alt="Right Arrow" className="h-7"/>
                            </span>
                        </div>
                    </span>
                </span>
                <span className="my-auto text-white flex justify-between items-center w-full">
                `    <div className="mt-20 mb-20 w-full mx-auto rounded-lg start_bg">
                        <div className="w-full mx-auto flex md:flex-row flex-col px-6 justify-between items-center md:pr-6">
                            <div className="flex justify-center md:flex-row flex-col items-center">
                                <img src="/assets/logos/eclaRingLogo.svg" className="h-40" alt="BBE Logo" />
                                <img src="/assets/logos/eclacommunity.svg" className="sm:h-7 lg:h-10 h-8" alt="ECLA Community Logo"/>
                            </div>
                            <button className="lg:py-2.5 lg:px-7 text-sm mt-2 md:mb-0 mb-5 py-2 px-3 border border-gray-600 text-gray-600 rounded-full font-semibold">Become a member</button>
                        </div>
                    </div>`
                </span>
            </div>
        </div>
    </div>
  )
}

export default EclaReality