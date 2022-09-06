import { AiOutlineArrowDown } from 'react-icons/ai';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
const InvestmentSection = () => {
    const investmentTopSection = useSelector(state=>state.investmentTopSection)
    const investmentPlans = useSelector(state=>state.investmentPlans)
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
                {investmentPlans.map((item,index)=>{
                    return (
                    <div key={index} className='md:w-1/2 w-full lg:w-1/3 p-5'>
                        <Link to={`/${item.fields.link}`}>
                            <div className='bg-white w-full p-5 rounded-3xl flex flex-col h-full'>
                                <div className='w-full rounded-t-3xl h-48 bg-gray-500'>{item.fields.image&&(<img className='rounded-t-3xl w-full max-h-48 object-cover' src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title}/>)}</div>
                                <h1 className='text-gray-700 text-2xl font-semibold mt-5'>{item.fields.title}</h1>
                                <p className='text-sm text-gray-700 font-semibold'>{item.fields.content.substring(0, 110) + '...'}</p>
                            </div>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default InvestmentSection