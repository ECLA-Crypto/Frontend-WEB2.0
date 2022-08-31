import { BiCopy } from "react-icons/bi"
import CommerceNav from "../static/CommerceSection/CommerceNav"

const AffiliateSection = () => {
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="w-full flex justify-center items-center">
                <div className="sm:w-80 w-full flex items-center flex-col gap-5">
                    <div className="flex text-white justify-between w-full sm:font-medium sm:text-lg">
                        <p className="p-2 sm:p-3 rounded-md border sm:border-2 border-white">Invited: <span>10</span></p>
                        <p className="p-2 sm:p-3 rounded-md border sm:border-2 border-white">Earned: <span>10ecla</span></p>
                    </div>
                    <div className="w-full flex">
                        <input type="text" disabled value='kawjkdkawdnawkdj' className="w-72 bg-white px-4 py-1.5 rounded-l font-medium"/>
                        <div className="flex justify-center items-center w-8 bg-eclablue rounded-r">
                            <BiCopy className="text-white text-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AffiliateSection