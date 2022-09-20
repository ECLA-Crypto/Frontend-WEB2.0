import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import CommerceNav from "../static/CommerceSection/CommerceNav";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

const AgricultureProduct = () => {
    const { enqueueSnackbar } = useSnackbar();
    let token = localStorage.accessToken
    const [walletAddress, setWalletAddress] = useState(false)
    const dispatch = useDispatch()
    const params = useParams();
    useEffect(() => {
        const getInvestment = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
            });
            const {items} = await client.getEntries({
                content_type:'agriculture',
                'fields.slug': params.id
            })
            dispatch({type:"SET_AGRICULTURE_INVESTMENT", payload: items[0]})
        }
        if (token) {
            const verify = () => {
                axios.get('https://ecla-backend.vercel.app/api/user/verify', { headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Accept':'application/json' }})
                .then(res=>{
                  if (res.data.status){
                    setWalletAddress(res.data.message.walletAddress)
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
            setWalletAddress(false)
        }
        getInvestment()
    }, [dispatch,params,enqueueSnackbar,token])
    const invest = (info) => {
        console.log(info)
        axios.put('https://ecla-backend.vercel.app/api/user/transactionHistory',{walletAddress:info.walletAddress, product:{plan:info.product.plan,price:info.product.minInvestment}}).then(res=>{
            if (res.data.status) {
                enqueueSnackbar(`${res.data.message}`, { variant:"success" });
            } else {
                enqueueSnackbar(`${res.data.message}`, { variant:"error" });
            }
        }).catch(err=>{
            enqueueSnackbar(`${err.message}`, { variant:"error" });
        })
    }
    
    const product = useSelector(state=>state.agricproduct)
  return (
      <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        {product&&(
            <div className="mt-5 p-5 max_size">
                <div className="flex w-full flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-72 bg-gray-800"></div>
                    <div className="w-full md:w-1/2 p-5">
                        <h1 className="text-4xl font-semibold text-white">{product.fields.plan}</h1>
                        <p className="text-white text-lg mt-5">{product.fields.minInvestment}</p>
                        {walletAddress&&(<button onClick={()=>invest({walletAddress,product:product.fields})} className="px-8 py-2 mt-5 text-lg text-white connect_btn">Invest</button>)}
                    </div>
                </div>
                <div className="text-center w-full md:w-10/12 mt-16 mx-auto">
                    {product.fields.info.map((item,index)=>{
                        return (
                            <span key={index} className="flex flex-col items-center w-full">
                                <h5 className="text-gray-400 font-semibold text-lg">{item.title}</h5>
                                <p className="text-gray-300">{item.content}</p>
                            </span>
                        )
                    })}
                </div>
            </div>
        )}
    </div>
  )
}

export default AgricultureProduct