import { useState } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const InvestmentChart = () => {
    const labels = ['January','February','March','April','May'];
    const [coinData, setCoinData] = useState({
      labels,
      datasets: [{
        label: "Investment Chart",
        data: [1,2,3,4,5],
        backgroundColor: ['green']
      }]
    });
    
  return (
    <div id="chart" className="mt-5 h-full">
      <Line data={coinData}/>
    </div>
  )
}

export default InvestmentChart