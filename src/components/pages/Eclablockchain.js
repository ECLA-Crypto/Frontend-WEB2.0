import Helmet from "react-helmet"
import { Link } from "react-router-dom"
import BlockChainNav from "../static/BlockChainNav"
import Footer from "../static/Footer"
const Eclablockchain = () => {
  return (
      <>
        <div className="main_bg w-11/12 mx-auto pt-10">
            <Helmet>
            <title>ECLA BlockChain</title>
            </Helmet>
            <BlockChainNav/>
            <div className="flex flex-col text-center mt-24">
                <h1 className="text-7xl trade_title font-semibold">Strong. Fast. <br/> Precise.</h1>
                <p className="text-gray-300 mt-4 w-11/12 sm:w-96 mx-auto text-lg">Decentralized blockchain built to enable scalable, user-friendly apps for the world.</p>
                <div className="flex reltive">
                    <span className="blur_bg_eco w-48 rounded-full h-48 sm:left-52 z-0"></span>
                    <img src="/assets/logos/bigEclaLogo.png" className="h-56 w-56 mx-auto mt-20 z-20" alt="Ecla Logo"/>
                </div>
                <h2 className="font-semibold text-white text-4xl mt-24">Blockchain Ecosystem <br/> for Real People</h2>
            </div>
            <div className="md:p-0 mt-16 flex md:flex-row flex-col items-center gap-10 justify-around mb-5 mx-auto w-10/12">
                <span className="px-5 py-10 blockchain_gradient_left border border-gray-500 h-96 rounded-lg w-72 sm:w-96">
                    <h1 className="trade_title text-4xl font-semibold">Unrivaled <br/> Speed</h1>
                    <p className="text-gray-300 mt-5">Perform thousands of transactions in a split second.</p>
                    <p className="text-white underline font-semibold mt-5">Learn</p>
                    <img src="/assets/blur.png" alt='Blur' className="h-32 mt-5 absolute left-5 blur_img mix-blend-hue"/>
                </span>
                <span className="px-5 py-10 blockchain_gradient_right border border-gray-500 h-96 rounded-lg w-72 sm:w-96">
                    <h1 className="trade_title text-4xl font-semibold">Multichain<br/> Ecosyatem</h1>
                    <p className="text-gray-300 mt-4">Enjoy cross chain apps and features in one place.</p>
                    <p className="text-white underline font-semibold mt-5">Learn</p>
                    <img src="/assets/blur.png" alt='blur' className="h-32 mt-5 absolute right-5 blur_img mix-blend-hue"/>
                </span>
                <span className="blur_bg_eco w-32 rounded-full h-32 sm:right-20 right-0 z-0"></span>
            </div>
            <div className="flex justify-center items-center my-16 md:mt-36 md:mb-0">
                <span className="circles h-fit flex flex-col justify-center items-center sm:w-5/12 w-10/12">
                    <h1 className="text-xl md:text-3xl xl:text-4xl font-bold text-center text-white md:mt-20 xl:mt-28 mt-14 trade_title">Explore to Get <br/> more out of the <br/> ecosystem</h1>
                    <Link to='/eclaecosystem' className="explore_gradient underline md:mt-10 mt-3">Explore</Link>
                </span>
            </div>
            <div className="w-full sm:py-20 py-5 time_bg">
                <div className="w-4/5 mx-auto sm:flex-row flex-col  flex justity-between items-center">
                    <span className="sm:w-1/2 w-full">
                        <h1 className="text-3xl xl:text-6xl trade_title font-semibold">Join a new world of swift services</h1>
                        <p className="mt-3 text-gray-300 xl:text-base text-xs">Enjoy a Blockchain with many exciting and innovative features that provide solutions to existing problems; enhancing Web 3.0 and Virtual Reality development</p>
                    </span>
                    <span className="sm:w-1/2 w-full flex justify-end relative mt-7 sm:mt-0">
                        <img src="/assets/icons/spiral.svg" className="h-76" alt="spiral" />
                        <Link to='/' className='md:text-xl xl:text-3xl absolute xl:bottom-20 bottom-10 md:left-24 left-12 text-white underline'>Read <br/> Documentation</Link>
                    </span>
                </div>
            </div>
            <div className="mt-20 mb-20 lg:w-10/12 xl:w-10/12 mx-auto rounded-lg start_bg">
                <div className="w-full mx-auto flex md:flex-row flex-col  justify-between items-center md:pr-20">
                    <div className="flex justify-center md:flex-row flex-col items-center">
                        <img src="/assets/logos/eclaRingLogo.svg" className="h-40" alt="BBE Logo" />
                        <img src="/assets/logos/eclacommunity.svg" className="sm:h-10 h-8" alt="ECLA Community Logo"/>
                    </div>
                    <a href="https://linktr.ee/eclaecosystem" rel="noreferrer" target="_blank" className="lg:py-2.5 lg:px-7 text-sm mt-2 md:mb-0 mb-5 py-2 px-3 border border-white rounded-full text-white font-semibold">Join Community</a>
                </div>
            </div>
        </div>
        <Footer/>
      </>
  )
}

export default Eclablockchain