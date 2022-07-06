import { useState } from "react"
import Helmet from "react-helmet"
import Footer from "../static/Footer"
import Header from "../static/Header"
import Limits from "../static/Limit"
import Swap from "../static/Swap"
import Table from "../static/Table"
import Wallet from "../static/Wallet"
import Transfers from "../static/Transfers"
import Liquidity from "../static/Liquidity"
import axios from "axios"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Chart from "../static/Chart"
import NFTS from "../static/NFTS"
import Balance from "../static/Balance"
const Homepage = () => {
  const dispatch = useDispatch();
  const topCoin = useSelector(state=>state.topCoin);
  const bottomCoin = useSelector(state=>state.bottomCoin);
  const [connectPage, setConnectPage] = useState('swap')
  const time = useSelector(state=>state.fetchTime.time);
  const current = new Date();
  const date = `${current.toLocaleString('en-us', { month: 'short' })} ${current.getDate()}, ${current.getFullYear()}`;
  const times = current.getHours() + ':' + current.getMinutes();
  return (
    <div className="spiral_bg overflow-x-hidden">
      <div className={`main_bg w-11/12 mx-auto pt-10 ${connectPage==='transfers'|| connectPage==='liquidity' || connectPage==='balance'?'h-screen overflow-y-auto' : ''}`}>
        <Helmet>
          <title>ECLA {connectPage}</title>
        </Helmet>
        <Header/>
        <div className="inner_bg rounded flex justify-between text-white text-xs mt-16 mx-auto w-full sm:w-fit gap-2 overflow-x-auto">
          <button onClick={()=>setConnectPage('swap')} className={`pl-5 pr-3 font-medium py-3 ${connectPage==='swap'? 'active' : null}`}>Swap</button>
          {/* <button onClick={()=>setConnectPage('limit')} className={`px-3 font-medium py-3 ${connectPage==='limit'? 'active' : null}`}>Limit</button> */}
          {/* <button onClick={()=>setConnectPage('liquidity')} className={`px-3 font-medium py-3 ${connectPage==='liquidity' ? 'active' : null}`}>Liquidity</button> */}
          <button onClick={()=>setConnectPage('wallet')} className={`px-3 font-medium py-3 ${connectPage==='wallet' ? 'active' : null}`}>Wallet</button>
          <button onClick={()=>setConnectPage('balance')} className={`px-3 font-medium py-3 ${connectPage==='balance' ? 'active' : null}`}>Balance</button>
          <button onClick={()=>setConnectPage('transfers')} className={`px-3 font-medium py-3 ${connectPage==='transfers' ? 'active' : null}`}>Transfers</button>
          <button onClick={()=>setConnectPage('nfts')} className={`pl-3 pr-5 font-medium py-3 ${connectPage==='nfts' ? 'active' : null}`}>NFTs</button>
        </div>
        <div className={` ${connectPage!=='wallet'&&connectPage!=='liquidity'?'inner_bg p-5 md:w-11/12 w-full': 'p-0 w-full'} mx-auto lg:w-10/12  mt-10 flex flex-col justify-between rounded`}>
          <div className="flex lg:flex-row flex-col justify-between rounded">
            <div className={`lg:w-4/6 w-full md:p-5 ${connectPage==='wallet' || connectPage==='liquidity'||connectPage==='transfers' ||connectPage==='nfts'||connectPage==='balance'? 'hidden' : ''}`}>
                <div className="flex flex-col md:flex-row justify-between">
                    <span className="flex justify-between md:flex-row flex-col w-full">
                        <span>
                            {topCoin.coinInfo&&bottomCoin.coinInfo? (<h1 className="font-semibold text-white text-3xl mt-2">1001.203<sub className="text-gray-400 ml-1 text-xs uppercase">{topCoin.coinInfo.symbol}/{bottomCoin.coinInfo.symbol}</sub> </h1>) : ''}
                            <small id="rate" className="text-xs">+0.333(+0.72%)</small>
                        </span>
                        <div className="mt-3 md:mt-0">
                            <span className="rounded-lg h-fit w-fit flex border-2 border-gray-600 text-white time_bg">
                                <button className={`rounded py-2.5 px-3.5 text-xs font-semibold ${time===1?"active_time": ''}`} onClick={()=>dispatch({type:"SET_FETCH_TIME", payload:{time:1}})}>24H</button>
                                <button className={`rounded py-2.5 px-3.5 text-xs font-semibold ${time===7&&"active_time"}`} onClick={()=>dispatch({type:"SET_FETCH_TIME", payload:{time:7}})}>1W</button>
                                <button className={`rounded py-2.5 px-3.5 text-xs font-semibold ${time===30&&"active_time"}`} onClick={()=>dispatch({type:"SET_FETCH_TIME", payload:{time:30}})}>1M</button>
                                <button className={`rounded py-2.5 px-3.5 text-xs font-semibold ${time===365&&"active_time"}`} onClick={()=>dispatch({type:"SET_FETCH_TIME", payload:{time:365}})}>1Y</button>
                            </span>
                            <p className="text-gray-200 text-xs mt-2 md:text-right text-left">{date}, {times}</p>
                        </div>
                    </span>
                </div>
                <Chart/>
            </div>
            {connectPage==='swap'? <Swap/>: connectPage==='limit' ? <Limits/>: connectPage==='liquidity' ? <Liquidity/> : connectPage==='wallet' ? <Wallet/> : connectPage==='transfers' ? <Transfers/> : connectPage==='balance' ? <Balance/> : connectPage==='nfts' ? <NFTS/> :<Swap/>}
          </div>
        {connectPage==='limit'&&<Table/>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Homepage