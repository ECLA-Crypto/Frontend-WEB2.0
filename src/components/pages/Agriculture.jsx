import { useDispatch, useSelector } from "react-redux"
import { createClient } from "contentful";
import CommerceNav from "../static/CommerceSection/CommerceNav"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Agriculture = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const agric = useSelector(state=>state.agriculture)
    const productPage = async (item) => {
        navigate(`/agricproduct/${item.fields.slug}`)
    }
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
            });
            const agriculture = await client.getEntries({ content_type: "agriculture" })
            dispatch({type: "SET_AGRICULTURE_SECTION", payload:agriculture.items})
        }
        getInfo()
    }, [dispatch])
  return (
    <div className="w-full">
        <div className="categories_Section flex-col ecosys_hero h-72">
            <CommerceNav/>
            <div className="w-full flex h-fit my-auto">
                <div className="max_size my-auto h-full flex flex-col">
                    <h1 className="text-center text-5xl text-white font-semibold">Agriculture</h1>
                </div>
            </div>
        </div>
        <div className="w-full flex mt-5">
            <div className="max_size my-auto flex flex-col">
                <div className='flex flex-wrap'>
                    {agric.map((item,index)=>{
                        return (
                        <div key={index} className='md:w-1/2 w-full lg:w-1/3 p-5'>
                            <div className='bg-white w-full p-5 rounded flex flex-col h-full' onClick={()=>productPage(item)}>
                                <div className='w-full rounded-t h-48 bg-gray-500'>{item.fields.image&&(<img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title}/>)}</div>
                                <h1 className='text-gray-700 text-lg font-semibold mt-5'>{item.fields.plan}</h1>
                                <p className='text-sm text-gray-700 font-semibold mt-3'>{item.fields.minInvestment}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agriculture