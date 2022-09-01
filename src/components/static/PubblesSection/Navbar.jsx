import { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiMenuAltRight,BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [connected, setConnected] = useState(false)
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
    const connectWallet = () => {
        setConnected(true)
    }
    const close = () => {
        setMenu(false)
        setToggle(false)
    }
  return (
    <div className={`w-full py-5 flex z-40 ${classs?'py-2 px-3 bg-eclablue fixed z-40 left-0 top-0':''}`}>
        <nav className="md_max_size md:flex hidden justify-between items-center">
            <Link to='/'>
                <h1 className='text-white font-semibold text-3xl'>Pubbles</h1>
            </Link>
            <ul className='flex text-white gap-5 items-center text-sm'>
                <li><Link to='#'>About</Link></li>
                <li><Link to='#'>Roadmap</Link></li>
                <li><Link to='#'>Community</Link></li>
                <li><Link to='#'>Connect Wallet</Link></li>
            </ul>
        </nav>
        <nav className='w-full flex md:hidden justify-between items-center py-2'>
            <Link to='/'>
                <h1 className='text-3xl text-white font-semibold'>Pubbles</h1>
            </Link>
            {!toggle&&<BiMenuAltRight className='text-4xl text-white' onClick={()=>setToggle(true)}/>}
        </nav>
        {toggle&&(
            <div className='w-full md:hidden flex bg-eclablue/95 fixed top-0 left-0 h-screen'>
                <div className='w-10/12 h-full bg-eclablue py-5 px-3 flex flex-col gap-7 items-start'>
                    <h1 className='text-3xl text-white font-semibold'>Pubbles</h1>
                    <ul className='flex flex-col text-white gap-7 text-sm'>
                        <li><Link onClick={()=>setToggle(false)} to='#'>About</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='#'>Roadmap</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='#'>Community</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='#'>Connect Wallet</Link></li>
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

export default Navbar