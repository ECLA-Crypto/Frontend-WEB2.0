import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import axios from 'axios'

const Chart = () => {
    const [coinData, setCoinData] = useState({
      labels: [1,2,3,4,5],
      datasets: [{
        label: "Coin Chart",
        data: [1,2,3,4,5],
        backgroundColor: ['green']
      }]
    });
    const dispatch = useDispatch();
    const graphDetails = useSelector(state=>state.graphdata);
    const topCoinDetails = useSelector(state=>state.topCoin);
    const time = useSelector(state=>state.fetchTime.time)
    if (!topCoinDetails.coinInfo) {
    } else {
        let topCoinId = topCoinDetails.coinInfo.id;
        axios.get(`https://api.coingecko.com/api/v3/coins/${topCoinId}/market_chart?vs_currency=usd&days=${time}&interval=daily`).then(res=>{
          dispatch({type:"SET_GRAPH_DATA", payload:{graphInfo:res.data}});
          setCoinData({
            labels: graphDetails.graphInfo.prices.map((items)=> items[0]),
            datasets: [{
              label: `${topCoinId}`,
              data: graphDetails.graphInfo.prices.map((items)=> items[1]),
              backgroundColor: ['green'],
              borderColor: ['green'],
              tension: 0.4,
              pointRadius: 1.5,
            }]
          })
        }).catch(err=> {
          setCoinData({
            labels: [1,2,3,4,5],
            datasets: [{
              label: "Compare Coins",
              data: [1,2,3,4,5],
              backgroundColor: ['green'],
              borderColor: ['green'],
              tension: 0.4,
              pointRadius: 0,
            }]
          })
        })
      }
    
  return (
    <div id="chart" className="mt-5 h-full">
      <Line data={coinData}/>
    </div>
  )
}

export default Chart