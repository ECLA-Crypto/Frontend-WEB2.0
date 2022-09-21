import { useDispatch, useSelector } from "react-redux"
import { createClient } from "contentful";
import CommerceNav from "../static/CommerceSection/CommerceNav"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../static/Footer";

const DigitalAccessMarket = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const accessMarket = useSelector(state=>state.digitalAccessMarket)
    const productPage = async (item) => {
        navigate(`/digital-access-market/${item.fields.slug}`)
    }
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
            });
            const digitalAccessMarket = await client.getEntries({ content_type: "digitalAccessMarket" })
            dispatch({type: "SET_ACCESS_MARKET_SECTION", payload:digitalAccessMarket.items})
        }
        getInfo()
    }, [dispatch])
  return (
    <div className="w-full">
        <div className="categories_Section flex-col ecosys_hero h-fit">
            <CommerceNav/>
            <div className="w-full flex h-fit my-20">
                <div className="max_size my-auto h-full flex flex-col">
                    <h1 className="text-center text-5xl text-white font-semibold">Digital Asset Market</h1>
                </div>
            </div>
            <div className="w-full flex mt-5">
                <div className="max_size my-auto flex flex-col">
                    {accessMarket&&(
                        <div className='flex flex-wrap'>
                            {accessMarket.map((item,index)=>{
                                return (
                                <div key={index} className='md:w-1/2 w-full lg:w-1/3 p-5'>
                                    <div className='bg-white w-full p-5 rounded-3xl flex flex-col h-full' onClick={()=>productPage(item)}>
                                        <div className='w-full rounded-t-3xl h-48 bg-gray-500'>{item.fields.image&&(<img src={item.fields.image.fields.file.url} className='w-full h-full object-cover' alt={item.fields.image.fields.title}/>)}</div>
                                        <h1 className='text-gray-700 text-lg font-semibold mt-5'>{item.fields.plan}</h1>
                                        <p className='text-sm text-gray-700 font-semibold mt-3'>{item.fields.minInvestment}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default DigitalAccessMarket