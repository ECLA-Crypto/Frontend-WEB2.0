import axios from "axios"
import { useSnackbar } from "notistack"
import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import CommerceNav from "../static/CommerceSection/CommerceNav"
import InvestmentChart from "../static/CommerceSection/InvestmentChart"

const UserDashboard = ({walletAddress}) => {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const recentTransaction = useSelector(state=>state.hedgeTransaction)
    const userProfile = useSelector(state=>state.userProfile)
    useEffect(() => {
        const findWallet = () => {
            axios.post('https://ecla-backend.vercel.app/api/user/findWallet',{walletAddress}).then(res=>{
                dispatch({type:"SET_HEDGE_TRANSACTION", payload:res.data.result.transactionHistory})
                dispatch({type:"SET_USER_INFO", payload:res.data.result})
            }).catch(err=>{
                enqueueSnackbar(`${err.message}`, { variant:"error" });
            })
        }
        findWallet()
    }, [dispatch,enqueueSnackbar,walletAddress])
    if (userProfile) {
        if (userProfile.profileImage) {
            console.log(userProfile.profileImage.length)
        }
    }
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="w-full flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <InvestmentChart/>
                    {/* <div className="bg-gray-300 w-full h-full"></div> */}
                </div>
                <div className="md:w-1/2 w-full px-5 flex gap-5 justify-between md:flex-row flex-col">
                    {userProfile&&(
                        <div className="md:w-fit h-fit w-full flex justify-center items-center px-5 text-gray-900">
                            {userProfile.profileImage.lenght>0?<img src={userProfile.profileImage} alt={userProfile.username} className='w-10 h-10 rounded-full'/>:<img src="https://images.freeimages.com/images/large-previews/034/dog-profile-1408111.jpg" alt='profileImage' className='w-10 h-10 rounded-full'/>}
                            <div className="ml-3">
                                <h4 className="font-semibold text-2xl text-white">{userProfile.username}</h4>
                                <h4 className="text-xs text-white px-3 py-2 bg-gray-800 rounded font-semibold">{userProfile.walletAddress.substring(0, 8) + "..." + userProfile.walletAddress.substring(30, userProfile.walletAddress.length)}</h4>
                            </div>
                        </div>
                    )}
                    <div className="md:w-fit h-fit w-full bg-gray-300 flex justify-center items-center px-5 py-10 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Paid Investment</h4>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        S/N
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Investment Plan
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            {recentTransaction&&(
                                <tbody>
                                    {recentTransaction.map((item,index)=>{
                                        return (
                                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</th>
                                                <td className="py-4 px-6">{item.plan}</td>
                                                <td className="py-4 px-6">{item.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-5 h-fit">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        S/N
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Investment Plan
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            {recentTransaction&&(
                                <tbody>
                                    {recentTransaction.map((item,index)=>{
                                        return (
                                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</th>
                                                <td className="py-4 px-6">{item.plan}</td>
                                                <td className="py-4 px-6">{item.price}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDashboard