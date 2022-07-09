import { Helmet } from "react-helmet"
import BuyNav from "../static/BuyNav"

const EclaBuy = () => {
  return (
    <div className="bg-white">
    <Helmet>
        <title>Buy ECLA</title>
    </Helmet>
      <div className="ecosys_hero h-screen py-10">
          <div className="w-11/12 mx-auto flex flex-col justify-between h-full">
            <BuyNav/>
            <div className="h-5/6 w-full flex flex-col">
                <div className="flex justify-between items-center h-full">
                    <div className="md:w-3/5 w-full">
                        <h1 className="lg:text-5xl text-4xl font-bold text-white">Download Mobile Wallet App</h1>
                        <p className="text-white font-medium lg:text-lg mt-2">Spend, stake, store and swap from you mobile device</p>
                        <div className="flex sm:flex-row flex-col gap-5 w-full sm:items-center items-start mt-12">
                            <button className="bg-black rounded-lg py-2.5 px-5 w-fit">
                                <img src="/assets/buyimgs/playstore.png" className="h-10" alt="playstore"/>
                            </button>
                            <button className="bg-black rounded-lg py-2.5 px-5 w-fit">
                                <img src="/assets/buyimgs/applestore.png" className="h-10" alt="applestore"/>
                            </button>
                        </div>
                        <span className="rounded-full w-fit cursor-pointer px-8 py-2.5 text-blue-700 bg-white font-semibold mt-8 sm:mt-12 sm:text-lg flex items-center">Download Chrome Extension <img src="/assets/buyimgs/chromelogo.png" className="h-8 w-8 ml-3" alt="chrome logo"/></span>
                    </div>
                    <div className="hidden md:block h-full">
                        <img src="/assets/buyimgs/phone.png" className="h-full" alt="Phone"/>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default EclaBuy