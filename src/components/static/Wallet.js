const Wallet = () => {
  return (
    <div className="lg:w-5/12 md:w-11/12 w-full mx-auto border-2 border-gray-700 rounded-xl flex flex-col justify-between lg:p-5 md:p-7 p-5 md:mt-0 mt-5" id="swap_bg">
        <div>
            <span className="flex justify-center flex-col items-center">
                <span className="h-12 w-12 rounded-full bg-gray-400"></span>
                <small className="text-white font-semibold mt-3 flex gap-3">712922...120910 <img src="/assets/clipboard.svg"  alt="clipboard" className="h-5 cursor-pointer"/></small>
                <small className="text-white font-semibold mt-3">0 BNB</small>
            </span>
            <hr className="my-3 border-gray-600 border-0.5"/>
        </div>
        <div className="mt-2 mb-5">
            <h3 className="text-center text-gray-100 text-lg font-medium">Transfer Assets</h3>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between gap-3">
            <p className="text-gray-100 font-medium">Address:</p>
            <div className="relative w-4/5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-transparent border border-gray-500 text-gray-100 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full pl-10 p-2.5" placeholder="Public Address" required/>
            </div>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between gap-3">
            <p className="text-gray-100 font-medium">Amount:</p>
            <div className="relative w-4/5">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 487.6 487.6"><path d="M460.3,216.55h-11.6v-69.7c0-28.5-23.2-51.6-51.6-51.6h-10.7l0.1-25.9c0-19.2-15.6-34.8-34.8-34.8H42.3 c-23.1,0-42,18.6-42.3,41.7c0,0.2,0,0.4,0,0.6v341.4c0,19.2,15.6,34.8,34.8,34.8h362.4c28.5,0,51.6-23.2,51.6-51.6v-69.8h11.6 c15,0,27.2-12.2,27.2-27.2v-60.7C487.5,228.75,475.3,216.55,460.3,216.55z M42.3,58.55h309.4c5.9,0,10.8,4.8,10.8,10.7l-0.1,26 H42.3c-10.1,0-18.3-8.2-18.3-18.3S32.2,58.55,42.3,58.55z M424.7,401.35c0,15.2-12.4,27.6-27.6,27.6H34.7 c-5.9,0-10.8-4.8-10.8-10.8v-303.1c5.6,2.7,11.8,4.2,18.4,4.2h354.8c15.2,0,27.6,12.4,27.6,27.6v69.7h-81.9 c-15,0-27.2,12.2-27.2,27.2v60.7c0,15,12.2,27.2,27.2,27.2h81.9V401.35z M463.5,304.45c0,1.8-1.4,3.2-3.2,3.2H342.9 c-1.8,0-3.2-1.4-3.2-3.2v-60.7c0-1.7,1.4-3.2,3.2-3.2h117.4c1.7,0,3.2,1.4,3.2,3.2L463.5,304.45L463.5,304.45z"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-transparent border border-gray-500 text-gray-100 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full pl-10 p-2.5" placeholder="Public Address" required/>
            </div>
        </div>
        <div className="mt-2 mb-5 flex items-center justify-between gap-3">
            <p className="text-gray-100 font-medium">Assets:</p>
            <input type='text' placeholder="Assets" className="px-3 py-2.5 w-4/5 rounded-lg border border-gray-500 bg-transparent outline-none text-gray-300 text-sm focus:ring-gray-300 focus:border-gray-300" required/>
        </div>
        <button className="transfer_btn rounded font-semibold text-sm lg:mt-3 mt-10 py-2.5 text-white ">Transfer</button>
    </div>
  )
}

export default Wallet