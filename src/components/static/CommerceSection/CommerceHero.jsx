import { useSelector } from "react-redux"
import { AiOutlineArrowRight } from 'react-icons/ai';
const CommerceHero = () => {
    const herosection = useSelector(state=>state.heroSection)
  return (
    <div className="w-full flex h-full">
        <div className="max_size my-auto h-full md:h-5/6 flex flex-col">
            {herosection.map((item,index)=>{
                return (
                    <div key={index} className="my-auto flex flex-col gap-3 md:gap-5 lg:gap-5 items-start">
                        <h1 className="xl:text-7xl md:text-7xl text-5xl text-white font-bold w-full md:w-10/12 lg:w-7/12 tracking-wider">{item.fields.title}</h1>
                        <p className="text-white text-lg md:text-xl md:w-10/12 lg:w-8/12 xl:text-xl xl:w-5/12">{item.fields.subContent}</p>
                        <a href="#each_Section" className="underline-none outline-none">
                            <button className="md:text-xl outline-none text-white flex items-center private_btn py-3 rounded px-4">Choose Invesment<AiOutlineArrowRight className='ml-2 text-xl'/></button>
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CommerceHero