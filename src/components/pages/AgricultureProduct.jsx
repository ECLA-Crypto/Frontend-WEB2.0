import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import CommerceNav from "../static/CommerceSection/CommerceNav";
import { useDispatch, useSelector } from "react-redux";

const AgricultureProduct = () => {
    const product = useSelector(state=>state.agricproduct)
    console.log(product)
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
        getInvestment()
    }, [params])
    
  return (
    <div className="w-full">
        <div className="categories_Section flex-col">
            <CommerceNav/>
        </div>
        <div className="mt-5 p-5 max_size">
            <div className="flex w-full">
                <div className="w-1/2 h-72 bg-gray-800"></div>
                <div className="w-1/2 p-5">
                    <h1 className="text-4xl font-semibold text-white">{product.fields.plan}</h1>
                    <p className="text-white text-lg mt-5">{product.fields.minInvestment}</p>
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
    </div>
  )
}

export default AgricultureProduct