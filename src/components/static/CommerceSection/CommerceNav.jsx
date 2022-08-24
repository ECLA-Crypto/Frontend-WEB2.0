import { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
const CommerceNav = () => {
    const [toggle, setToggle] = useState(false)
    const [classs, setClasss] = useState(false)
    const stickyTop = () => {
        if (window.scrollY >= 730) {
            setClasss(true)
        } else {
            setClasss(false)
        }
    }
    window.addEventListener('scroll', stickyTop)
  return (
    <div className={`w-full py-5 flex ${classs?'bg-eclablue fixed z-40 left-0 top-0':''}`}>
        <nav className="max_size md:flex hidden justify-between items-center">
            <img src="/assets/logos/swapLogo.svg" alt="Commerce logo" className="h-10" />
            <ul className='flex text-white gap-5 items-center text-sm'>
                <li><Link to='/eclacommerce'>Home</Link></li>
                <li><Link to='/eclacommerce'>Investment Plans</Link></li>
                <li><Link to='/eclacommerce'>Contact Us</Link></li>
                <li><button className="connect_btn px-5 py-2">Connect Wallet</button></li>
            </ul>
        </nav>
        <nav className='w-full flex md:hidden justify-between items-center py-2'>
            <img src="/assets/logos/swapLogo.svg" alt="Commerce logo" className="sm:h-10 h-8" />
            {!toggle&&<BiMenuAltRight className='text-4xl text-white' onClick={()=>setToggle(true)}/>}
        </nav>
        {toggle&&(
            <div className='w-full md:hidden flex bg-eclablue/95 fixed top-0 left-0 h-screen'>
                <div className='w-10/12 h-full bg-eclablue py-5 px-3 flex flex-col gap-7 items-start'>
                    <img src="/assets/logos/swapLogo.svg" alt="Commerce logo" className="sm:h-10 h-8" />
                    <ul className='flex flex-col text-white gap-7 text-sm'>
                        <li><Link onClick={()=>setToggle(false)} to='/eclacommerce'>Home</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='/eclacommerce'>Investment Plans</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='/eclacommerce'>Contact Us</Link></li>
                        <li><button onClick={()=>setToggle(false)} className="connect_btn px-5 py-2">Connect Wallet</button></li>
                    </ul>
                </div>
                <div className='w-2/12 h-full py-5 flex justify-center' onClick={()=>setToggle(false)}>
                    <AiOutlineClose onClick={()=>setToggle(false)} className='text-white text-4xl'/>
                </div>
            </div> 
        )}
    </div>
  )
}

export default CommerceNav