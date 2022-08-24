import { AiOutlineArrowDown } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/exports';
const InvestmentSection = () => {
    const investmentTopSection = useSelector(state=>state.investmentTopSection)
  return (
    <div className="w-full each_Section" id="investment_plans">
        <div className="max_size flex flex-col py-10">
            {investmentTopSection.map((item,index)=>{
                return (
                    <span key={index} className='gap-4 flex-col flex'>
                        <h1 className="text-2xl md:text-4xl font-semibold text-white flex items-center">{item.fields.title} <AiOutlineArrowDown className='text-white text-2xl md:text-3xl ml-2 animate-bounce'/></h1>
                        <p className='text-lg text-gray-300 w-full lg:w-6/12'>{item.fields.subContent}</p>
                    </span>
                )
            })}
            <div className='flex flex-wrap justify-center'>
                <div className='md:w-1/2 w-full lg:w-1/3 p-5'>
                    <div className='bg-white w-full p-5 rounded'></div>
                </div>
                <div className='md:w-1/2 w-full lg:w-1/3 p-5'>
                    <div className='bg-white w-full p-5 rounded'></div>
                </div>
                <div className='md:w-1/2 w-full lg:w-1/3 p-5'>
                    <div className='bg-white w-full p-5 rounded'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InvestmentSection