import { useEffect,  useState } from "react"
import Helmet from "react-helmet"
import { Link, useNavigate } from "react-router-dom"
import DarkFooter from "../static/DarkFooter"
import EcosystemNav from "../static/EcosystemNav"
import { useDispatch, useSelector } from 'react-redux'

const EclaEcosystem = () => {
  const navigate = useNavigate()
  const [sidenav, setSidenav] = useState('Intro');
  const dispatch = useDispatch();
  const privateSales = useSelector(state=>state.privateSales)
  const stake = () => {
    dispatch({type:"SET_CONNECTION_PAGE", payload:'staking'})
    navigate('/swap');
  }
  const [timeDays, setTimeDays] = useState(0)
  const [timeHours, setTimeHours] = useState(0)
  const [timeMinutes, setTimeMinutes] = useState(0)
  const [timeSeconds, setTimeSeconds] = useState(0)

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Aug 15, 2022 19:23:30").getTime()
    interval= setInterval(()=>{
      const now = new Date().getTime()
      const distance = countDownDate-now;
      let days = Math.floor(distance/ (24*60*60*1000));
      let hours = Math.floor((distance%(24*60*60*1000))/(1000*60*60))
      let minutes = Math.floor((distance%(60*60*1000))/(1000*60))
      let seconds = Math.floor((distance%(60*1000))/1000);
      if (distance<0) {
        clearInterval(interval.current)
      } else {
        if (days<10) {days="0"+days}
        setTimeDays(days);
        if (hours<10) {hours="0"+hours}
        setTimeHours(hours);
        if (minutes<10) {minutes="0"+minutes}
        setTimeMinutes(minutes);
        if (seconds<10) {seconds="0"+seconds}
        setTimeSeconds(seconds)
      }
    })
  }
  useEffect(() => {
    startTimer()
  }, [startTimer])
  
  return (
    <>
        <div className="bg-white">
        <Helmet>
            <title>Ecla Ecosystem</title>
        </Helmet>
          <div className="ecosys_hero h-screen py-10">
            {privateSales&&(
              <div className="fixed z-40 top-0 w-full h-screen bg-black/60 flex justify-center items-center flex-col">
                <div className=" md:w-96 w-72 mx-auto ">
                  <button className="w-10 h-10 private_bg text-white ml-auto mb-5 flex justify-center items-center font-semibold text-xl rounded-full outline-none" onClick={()=>dispatch({type:"SET_PRIVATE_SALES", payload:false})}>X</button>
                  <div className="md:w-96 w-full py-5  bg-white rounded flex flex-col private_bg">
                    <h2 className="text-center text-white tracking-wider font-semibold text-2xl">Private Sales</h2>
                    {timeDays!==0&&timeHours!==0&&timeMinutes!==0&&timeSeconds!==0? <Link to='/privatesales' className="text-xl private_btn py-2 cursor-pointer rounded w-fit mx-auto text-center font-bold mt-5 text_color px-10">{timeDays} : {timeHours}  : {timeMinutes} : {timeSeconds} </Link> : <button className="mx-auto font-semibold px-5 py-2 private_btn rounded text-gray-100 tracking-wider mt-3 z-40" onClick={()=>dispatch({type:"SET_PRIVATE_SALES", payload:false})}>Private Sales Ended</button> }
                  </div>
                </div>
              </div>
            )}
              <div className="w-11/12 mx-auto flex flex-col justify-between h-full">
                <EcosystemNav/>
                <div className="h-4/6 w-full flex flex-col">
                  <h1 className="sm:text-6xl md:text-6xl md:w-3/5 w-full text-4xl font-bold text-white mx-auto text-center">Blockchain Ecosystem for Real People</h1>
                  <span className="flex md:gap-10 gap-5 mt-7 md:mt-10 mx-auto flex-wrap items-center justify-center">
                    <button className="text-lg text-white connect_btn px-8 py-2 lg:px-10 lg:py-3">Roadmap</button>
                    <button onClick={()=> window.open("/assets/pdf/whitepaper.pdf","_blank")} className="text-lg px-8 py-2 bg-white whitepaper_btn lg:px-10 lg:py-3">Read Whitepaper</button>
                  </span>
                </div>
              </div>
          </div>
          <div className="mt-10 w-10/12 flex md:flex-row flex-col gap-10 py-10 mx-auto pt-20">
            <div className="md:w-3/12 sticky top-0 bg-white">
              <span className="flex md:flex-col overflow-x-auto w-full sticky top-0 flex-row md:py-5 py-3 md:px-3 gap-5">
                <a href="#Intro" onClick={()=>setSidenav('Intro')} className={`${sidenav==='Intro'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>Introduction</a>
                <a href="#Nft" onClick={()=>setSidenav('Nft')} className={`${sidenav==='Nft'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>NFT Marketplace</a>
                <a href="#Reality" onClick={()=>setSidenav('Reality')} className={`${sidenav==='Reality'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>Ecla Reality</a>
                <a href="#Wallet" onClick={()=>setSidenav('Wallet')} className={`${sidenav==='Wallet'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>ECLA Wallet</a>
                <a href="#Bridge" onClick={()=>setSidenav('Bridge')} className={`${sidenav==='Bridge'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>ECLA Bridge</a>
                <a href="#Staking" onClick={()=>setSidenav('Staking')} className={`${sidenav==='Staking'?'text-blue-500 font-semibold': 'text-gray-600'} whitespace-nowrap md:whitespace-normal text-left`}>ECLA Staking</a>
              </span>
            </div>
            <span className="md:w-8/12 w-full">
              <div className="w-full flex md:flex-row flex-col items-center justify-between" id="Intro">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Enhancing the development of different areas in the global economy.</h1>
                    <p className="text-xs text-gray-700 mt-5">The ECLA CHAIN is aimed at building a solid ground for agriculture, real estate and e-commerce; seeing that these are major industries in today’s world; hence our motto is Blockchainecosystem for real people.</p>
                    <button onClick={()=> window.open("/assets/pdf/whitepaper.pdf","_blank")} className="connect_btn px-8 py-2 mt-7 text-white">Read Whitepaper</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/building.png" className="md:h-fit h-32 mx-auto" alt="Database"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col" id="Nft">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">NFT Marketplace</h1>
                    <p className="text-xs text-gray-700 mt-5">The first of its kind Marketplace for "Family-life themed" NFTs. Users will be able to access, buy, sell and mint NFTs using the $ECLA token deployed on the ECLA CHAIN.</p>
                    <Link to='/eclamarket'>
                      <button className="connect_btn px-8 py-2 mt-7 text-white">Explore</button>
                    </Link>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/EcosysImages/slogo.png" className="md:h-fit h-32 mx-auto" alt="DollarSign"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col" id="Reality">
                <span className="md:w-4/12 w-full md:mt-0 mb-5">
                    <img src="/assets/EcosysImages/bigleaves.png" className="md:h-fit h-32 mx-auto" alt="Leaves"/>
                </span>
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">Ecla Reality</h1>
                    <p className="text-xs text-gray-700 mt-5">ECLA REALITY is a Virtual Reality (V.R) and Augmented Reality (AR) environment that is powered or run by the Metaverse. This environment is perceived through a device known as a Virtual Reality headset or helmet. </p>
                    <Link to='/eclareality'>
                      <button className="connect_btn px-8 py-2 mt-7 text-white">Discover</button>
                    </Link>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col" id="Wallet">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">ECLA Wallet</h1>
                    <p className="text-xs text-gray-700 mt-5">A desire to eat healthy combined with the widespread adoption of technology across all domains has resulted in agribusinesses searching for supply chain management software to improve food safety, food quality, and the traceability of the entire farming supply chain.</p>
                    <div className="flex flex-col sm:flex-row sm:gap-5 gap-0">
                      <Link to='/swap'>
                        <button className="connect_btn px-8 py-2 mt-7 text-white">Swap</button>
                      </Link>
                      <Link to='/buyecla'>
                        <button className="border-blue-500 font-medium border rounded-full text-blue-500 px-8 py-2 mt-7">Download Wallet</button>
                      </Link>
                    </div>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/icons/eclaWallet.png" className="md:h-fit h-32 mx-auto" alt="SmallLeaves"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col" id="Bridge">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">ECLA Bridge</h1>
                    <p className="text-xs text-gray-700 mt-5">According to the Reportlinker, the US real estate commercial real market is worth over $4.5 trillion, an indication that the industry is well thronged by investors globally. Understandably, the demand for housing both, residential and commercial will continue to rise.</p>
                    <button className="connect_btn px-8 py-2 mt-7 text-white">Connect</button>
                </span>
                <span className="md:w-5/12 w-full md:mt-0 mt-5">
                    <img src="/assets/icons/eclaBridge.png" className="md:h-fit h-32 mx-auto" alt="Connections"/>
                </span>
              </div>
              <hr className="border-gray-400 mt-10"/>
              <div className="w-full flex items-center justify-between mt-10 md:flex-row flex-col" id="Staking">
                <span className="md:w-6/12 w-full">
                    <h1 className="text-xl font-semibold ecosysTitles">ECLA Staking</h1>
                    <p className="text-xs text-gray-700 mt-5">The E-commerce industry is controlled by big players like Amazon, eBay, Shopify. Despite the size of the industry, and the volume of transactions done daily, certain challenges have limited its further growth. One of them is high transactions for goods purchased by consumers.</p>
                    <button onClick={stake} className="connect_btn px-8 py-2 mt-7 text-white flex justify-center items-center gap-3"><img src='/assets/icons/eclaStack.png' className='w-5 h-5' alt='Stake logo'/>Stake Now</button>
                </span>
                <span className="md:w-4/12 w-full md:mt-0 mt-5">
                    <img src="/assets/icons/eclaStack.png" className="md:h-fit h-32 mx-auto" alt="Connections"/>
                </span>
              </div>
            </span>
          </div>
          <div className="relative">
            <div className="h-10"></div>
            <div className="flex md:flex-row flex-col xl:w-7/12 md:w-9/12 w-10/12 mx-auto rounded-xl items-center relative main_crypto_cont">
              <div className="sm:h-32 md:h-52 h-28 md:w-3/6 xl:w-2/6 w-5/6 relative">
                <img src="/assets/EcosysImages/ECLACoin.png" className="h-56 absolute md:left-5 cryto_logo" alt="Crypto Logo"/>
              </div>
              <span className="md:ml-10 md:w-4/6 xl w-5/6 text-white py-7 md:py-0">
                <h4 className="text-xl font-semibold">The ECLA Token (ECLA)</h4>
                <p className="text-xs mt-2 sm:w-4/5 w-full">It is an all-in-one interface to access the ECLA token economy. We are continuing to upgrade the ECLAWallet in order to support increasing composability and the seamless transfer of value across chains.</p>
                <Link to='/' className="underline text-xs mt-3">Read more</Link>
              </span>
            </div>
            <div id="community" className="archi py-28 flex flex-col justify-center items-center px-5">
              <img src="/assets/EcosysImages/structure.png" alt="Structure"/>
              <img src="/assets/EcosysImages/coinLogos.png" className="sm:h-7 h-5 mt-10" alt="Coin Logos"/>
            </div>
          </div>
        </div>
        <DarkFooter/>
    </>
  )
}

export default EclaEcosystem