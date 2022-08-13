import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../static/Header"

const PrivateSales = () => {
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
    <div className="main_bg w-full mx-auto pt-10 spiral_bg">
        <Helmet>
          <title>ECLA DEx</title>
        </Helmet>
        <div className="px-5">
            <Header/>
        </div>
        <div className="mx-auto w-full min-h-screen lg:mt-0 mt-7 flex items-center py-10">
            <div className="flex mx-auto sm:w-9/12 w-11/12 items-center justify-between">
                <div className="w-full h-full flex gap-5 flex-col lg:flex-row">
                    <div className="lg:w-7/12 h-fit w-full inner_bg py-5 flex flex-col gap-3">
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">Soft Cap</p>
                            <p className="text-gray-300 text-sm">50,000 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">Hard Cap</p>
                            <p className="text-gray-300 text-sm">100,000 BUSD</p>
                        </div>
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">Private Sale Start Time</p>
                            <p className="text-gray-300 text-sm">2022.08.15 10:00 (UTC)</p>
                        </div>
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">Private Sale End Time</p>
                            <p className="text-gray-300 text-sm">2022.08.15 10:00 (UTC)</p>
                        </div>
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">First Release For Project</p>
                            <p className="text-gray-300 text-sm">50%</p>
                        </div>
                        <div className="w-full flex justify-between items-center border-b border-gray-600 pb-1 px-5">
                            <p className="text-gray-300 text-sm">Vesting For Project</p>
                            <p className="text-gray-300 text-sm">25% each 2 days</p>
                        </div>
                    </div>
                    <div className="lg:w-4/12 w-full shadow flex flex-col gap-7">
                        <div className="flex-col justify-center w-full inner_bg shadow py-5 px-5">
                            <p className="text-gray-200 text-sm text-center tracking-wider">Private Sales Starts In</p>
                            <div className="flex mx-auto w-fit px-5 py-3 gap-2">
                                <span className="bg-blue-700 font-semibold text-sm text-white rounded p-2">{timeDays}</span>
                                <span className="bg-blue-700 font-semibold text-sm text-white rounded p-2">{timeHours}</span>
                                <span className="bg-blue-700 font-semibold text-sm text-white rounded p-2">{timeMinutes}</span>
                                <span className="bg-blue-700 font-semibold text-sm text-white rounded p-2">{timeSeconds}</span>
                            </div>
                            <div className="flex justify-between items-center mt-2 mb-1">
                                <p className="text-sm text-gray-200">0 BUSD</p>
                                <p className="text-sm text-gray-200">100,000 BUSD</p>
                            </div>
                            <div className="mt-5"> 
                                <p className="text-gray-200 font-semibold text-sm">Amount</p>
                                <input type='number' className="px-3 py-2 rounded mt-2 w-full text-sm" placeholder="0.0"/>
                            </div>
                        </div>
                        <div className="flex-col justify-center w-full inner_bg shadow py-5 px-5 gap-3 flex">
                            <div className="border-b border-gray-500 flex justify-between">
                                <p className="text-gray-200 text-xs">Status</p>
                                <p className="text-gray-200 text-xs">incoming</p>
                            </div>
                            <div className="border-b border-gray-500 flex justify-between">
                                <p className="text-gray-200 text-xs">Your BUSD balance</p>
                                <p className="text-gray-200 text-xs">0 BUSD</p>
                            </div>
                            <div className="border-b border-gray-500 flex justify-between">
                                <p className="text-gray-200 text-xs">Minimum Buy</p>
                                <p className="text-gray-200 text-xs">50 BUSD</p>
                            </div>
                            <div className="border-b border-gray-500 flex justify-between">
                                <p className="text-gray-200 text-xs">Maximum Buy</p>
                                <p className="text-gray-200 text-xs">5,000 BUSD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrivateSales