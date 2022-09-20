import axios from "axios"
import { useSnackbar } from "notistack"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import CommerceNav from "../static/CommerceSection/CommerceNav"
import InvestmentChart from "../static/CommerceSection/InvestmentChart"

const UserDashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let token = localStorage.accessToken
    const { enqueueSnackbar } = useSnackbar();
    const recentTransaction = useSelector(state=>state.hedgeTransaction)
    useEffect(() => {
        if (token) {
            const verify = () => {
                axios.get('https://ecla-backend.vercel.app/api/user/verify', { headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Accept':'application/json' }})
                .then(res=>{
                  if (res.data.status){
                    axios.post('https://ecla-backend.vercel.app/api/user/findWallet',{walletAddress:res.data.message.walletAddress}).then(res=>{
                        dispatch({type:"SET_HEDGE_TRANSACTION", payload:res.data.result.transactionHistory})
                    }).catch(err=>{
                        enqueueSnackbar(`${err.message}`, { variant:"error" });
                    })
                  }else{
                      localStorage.removeItem('token')
                      enqueueSnackbar(`${res.data.message}`, { variant:"error" });
                    }
                }).catch(err =>{
                    enqueueSnackbar('An Error Occured, Please Check Your Internet Connection.', { variant:"error" });
                })
            }
            verify();
        } else {
            navigate('/')
        }
    }, [dispatch,enqueueSnackbar])
    
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full p-5 h-fit">
                    <InvestmentChart/>
                    {/* <div className="bg-gray-300 w-full h-full"></div> */}
                </div>
                <div className="md:w-1/2 w-full p-5 flex gap-5 justify-between md:flex-row flex-col">
                    <div className="md:w-fit h-fit w-full bg-gray-300 flex justify-center items-center px-5 py-10 flex-col text-gray-900">
                        <h4 className="font-semibold text-2xl">40</h4>
                        <h4 className="font-semibold text-xl">Pending Cashout</h4>
                    </div>
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