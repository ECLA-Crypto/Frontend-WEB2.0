import CommerceNav from "../static/CommerceSection/CommerceNav"

const Editprofile = ({walletAddress}) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-eclaLightSkyBlue/30 to-eclaSkyBlue">
      <div className="categories_Section flex-col">
        <CommerceNav/>
      </div>
      <div className="max_size w-full mt-5">
        <div className="w-fit px-10 bg-white flex flex-col gap-3 py-10 rounded mx-auto my-auto">
          <p className="text-2xl md:text-3xl font-semibold text-center text-black/90">Edit Your Profile</p>
          <input type="text" placeholder="Username" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
          <input type="text" placeholder="Email Address" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
          <input type="text" placeholder="WalletAddress" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
          <button className="px-5 py-2 bg-eclaLightSkyBlue rounded mx-auto w-fit text-white">Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Editprofile