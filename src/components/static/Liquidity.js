const Liquidity = () => {
    return (
      <div className="lg:w-5/12 md:w-11/12 w-full mx-auto border-2 border-gray-700 rounded-xl flex flex-col justify-between lg:py-5 md:py-7 py-5 md:mt-0 mt-5" id="swap_bg">
          <div className="lg:px-5 md:px-7 px-5">
            <span className="flex justify-between itms-center">
                <h2 className="text-xl font-bold text-white">Your Liquidity</h2>
                <span className="flex items-center">
                    <img src="/assets/icons/settings.svg" className="h-5" alt="Settings"/>
                    <img src="/assets/icons/reload.svg" className="h-5 ml-3" alt="Refresh"/>
                </span>
            </span>
            <p className="text-xs text-gray-300 mt-2">Remove liquidity to receive tokens back</p>
            <hr className="my-3 border-gray-600 border-0.5"/>
          </div>
          <div className="mt-2 mb-5">
              <h3 className="text-center text-gray-100 text-sm bg-gray-900 w-full py-7 font-medium">Connect to a wallet to view your liquidity.</h3>
          </div>
          <div className="lg:px-5 md:px-7 px-5">
            <button className="transfer_btn rounded w-full font-semibold text-sm lg:mt-3 mt-10 py-2.5 text-white ">Add Liquidity</button>
          </div>
      </div>
    )
  }
  
  export default Liquidity