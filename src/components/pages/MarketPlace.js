import Helmet from "react-helmet"
import Footer from "../static/Footer"
import MarketplaceNav from "../static/MarketplaceNav"
import Slider from 'react-slick';

const MarketPlace = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
            },
            {
                arrows: false,
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
  return (
      <>
        <div className="main_bg w-11/12 mx-auto pt-10">
            <Helmet>
            <title>ECLA MarketPlace</title>
            </Helmet>
            <MarketplaceNav/>
            <div className="h-full py-20 flex flex-col justify-between items-center gap-10">
                <span className="text-white w-11/12 sm:w-1/2 mx-auto">
                    <h1 className="sm:text-3xl text-3xl lg:text-5xl font-semibold text-center">Discover, collect, extraordinary NFT for real people</h1>
                    <div className="flex gap-5 mt-7 mx-auto w-fit">
                        <button className="connect_btn px-7 md:px-10 py-2.5 text-white text-sm">Explore</button>
                        <button className="trade md:px-7 px-5 py-2.5 text-white text-sm">Create NFT</button>
                    </div>
                </span>
                <span className="w-full sm:w-2/3 lg:w-2/3 xl:w-1/2 flex rounded-lg mx-auto">
                    <div className="get_started py-3 h-80 z-0 w-full left-0 absolute"></div>
                    <Slider className="w-full mx-auto" {...settings}>
                        <div className="w-32 h-52 p-7">
                            <div className="w-full p-5 bg-blue-900/80 h-full"></div>
                        </div>
                        <div className="w-32 h-52 p-7">
                            <div className="w-full p-5 bg-blue-900/80 h-full"></div>
                        </div>
                        <div className="w-32 h-52 p-7">
                            <div className="w-full p-5 bg-blue-900/80 h-full"></div>
                        </div>
                        <div className="w-32 h-52 p-7">
                            <div className="w-full p-5 bg-blue-900/80 h-full"></div>
                        </div>
                    </Slider>
                    {/* <img src="/assets/marketplace/marketplace.png" className="w-full" alt="Marketplace"/> */}
                    {/* <span className="justify-between flex mt-5">
                        <span className="flex items-center">
                            <span className="rounded-full w-10 h-10 bg-gray-400">d</span>  
                            <span className="text-white ml-2">
                                <h5 className="font-medium text-sm">Lagbaja</h5>
                                <p className="text-xs">0.21 ECLA</p>
                            </span>
                        </span>
                        <span className="text-white"> 
                            <h5 className="font-medium text-sm">WE ARE HERE</h5>
                            <p className="text-xs text-right">25</p>
                        </span>
                    </span> */}
                </span>
            </div>
            <div className="mt-10 w-11/12 mx-auto">
                <span className="flex justify-between items-center text-white">
                    <h3 className="font-semibold text-3xl">Hot auctions</h3>
                    <span>
                        <small className="flex items-center gap-2">view<img src="/assets/rightchevron.png" className="h-3" alt="Left Arrow"/></small>
                    </span>
                </span>
                <div className="flex gap-10 flex-wrap items-center justify-between my-5">
                    <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Lorem Ipsum</strong>
                            <strong className="text-xs">1.20 ECLA</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Dolor sit amet</strong>
                            <strong className="text-xs">0.21 ECLA</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Dignissim curabitu..</strong>
                            <strong className="text-xs">0.01 ECLA</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 56.44.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                    <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Amet pellentesq..</strong>
                            <strong className="text-xs">0.55 ECLA</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 mt-32 text-white">
                    <h2 className="font-semibold text-3xl">Getting Started</h2>
                    <p className="sm:text-sm text-xs mt-0 text-center">Begin your NFT Journey in 4 easy steps</p>
                    <div className="py-10 w-11/12 flex flex-wrap justify-between items-center">
                        <div className="get_started py-3 h-32 w-8/12 absolute"></div>
                        <div className="flex sm:w-2/5 md:w-fit mt-5 flex-col items-center">
                            <div className="px-5 py-5 bg-gray-500 w-fit rounded-lg border border-gray-500 get_started_card">
                                <img src="/assets/verify.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="w-36 mt-3 text-center">Connect your wallet</small>
                        </div>
                        <div className="flex sm:w-2/5 md:w-fit mt-5 flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/archive.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="w-36 mt-3 text-center">Explore</small>
                        </div>
                        <div className="flex sm:w-2/5 md:w-fit mt-5 flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/mail.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="w-36 mt-3 text-center">Upload Your NFT</small>
                        </div>
                        <div className="flex sm:w-2/5 md:w-fit mt-5 flex-col items-center">
                            <div className="px-5 py-5 bg-gray-100 rounded-lg w-fit border border-gray-100 get_started_card">
                                <img src="/assets/Union.png" className="h-7" alt="verified"/>
                            </div>
                            <small className="w-36 mt-3 text-center">Good To Go</small>
                        </div>
                    </div>
                    <div className="w-10/12 xl:w-10/12 lg:w-full mt-5">
                        <nav className="flex items-center justify-between">
                            <h2 className="text-3xl font-medium">Discover</h2>
                            <ul className="lg:flex hidden items-center gap-9">
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Category
                                        <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Cheapest
                                        <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <li>
                                    <p className="text-white flex items-center text-sm tracking-wide font-medium">
                                        Newest
                                        <span><img src="/assets/icons/downchevron.svg" className=" ml-2" alt="downarrow"/></span>
                                    </p>
                                </li>
                                <button className="text-white px-8 py-1.5 rounded-lg filter_btn flex items-center"><img src='/assets/filter.png' alt="FilterIcon" className="h-4 mr-1"/>Fliter</button>
                            </ul>
                            <button className="lg:hidden block"><img src="/assets/menubar.png" className="h-10" alt="Menubar"/></button>
                        </nav>
                        <div className="flex gap-10 flex-wrap justify-between my-10">
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                        <div className="bg-gray-500 rounded-lg h-52"></div>
                        <span className="flex justify-between mt-5 items-center text-white">
                            <strong className="text-xs">Lorem Ipsum</strong>
                            <strong className="text-xs">1.20 ECLA</strong>
                        </span>
                        <hr className="my-2"/>
                        <span className="flex justify-between mt-3 items-center text-white">
                            <small className="text-xs">End in 01.34.45</small>
                            <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                        </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Dolor sit amet</strong>
                                <strong className="text-xs">0.21 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 01.34.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Dignissim curabitu..</strong>
                                <strong className="text-xs">0.01 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 56.44.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Amet pellentesq..</strong>
                                <strong className="text-xs">0.55 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 01.34.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Lorem Ipsum</strong>
                                <strong className="text-xs">1.20 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 01.34.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Dolor sit amet</strong>
                                <strong className="text-xs">0.21 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 01.34.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Dignissim curabitu..</strong>
                                <strong className="text-xs">0.01 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 56.44.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        <span className="sm:w-5/12 w-11/12 lg:w-1/5 mx-auto">
                            <div className="bg-gray-500 rounded-lg h-52"></div>
                            <span className="flex justify-between mt-5 items-center text-white">
                                <strong className="text-xs">Amet pellentesq..</strong>
                                <strong className="text-xs">0.55 ECLA</strong>
                            </span>
                            <hr className="my-2"/>
                            <span className="flex justify-between mt-3 items-center text-white">
                                <small className="text-xs">End in 01.34.45</small>
                                <button className="text-xs border border-white px-3.5 rounded py-1">Bid</button>
                            </span>
                        </span>
                        </div>
                        <div className="w-full my-10 flex">
                            <button className="border border-white rounded px-3 py-2 mx-auto mt-5">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-20 w-full lg:w-11/12 xl:w-10/12 mx-auto rounded-lg start_bg">
                <div className="w-full mx-auto flex md:flex-row flex-col justify-between items-center md:pr-6">
                    <div className="flex justify-center md:flex-row flex-col items-center">
                        <img src="/assets/logos/eclaRingLogo.gif" className="h-52" alt="BBE Logo" />
                        <img src="/assets/logos/eclacommunity.svg" className="sm:h-7 lg:h-10 h-8" alt="ECLA Community Logo"/>
                    </div>
                    <a href='https://linktr.ee/eclaecosystem' target="_blank" rel='noreferrer' className="lg:py-2.5 lg:px-7 text-sm mt-2 md:mb-0 mb-5 py-2 px-3 border border-white rounded-full text-white font-semibold">Become a member</a>
                </div>
            </div>
        </div>
        <Footer/>
      </>
  )
}

export default MarketPlace