import { useState } from 'react'
import {Link} from 'react-router-dom'
import { BiMenuAltRight,BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { useSnackbar } from 'notistack';
const CommerceNav = () => {
    const { enqueueSnackbar } = useSnackbar();
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
        axios.post('https://ecla-backend.vercel.app/api/user/connect',{walletAddress:"gSHgdahywgdhawdcghgadwchagwdhagwdhgwahdg"}).then(res=>{
            if (res.data.status) {
                localStorage.setItem('accessToken', res.data.token)
                enqueueSnackbar(`${res.data.message}`, { variant:"success" });
                setConnected(true)
            } else {
                enqueueSnackbar(`${res.data.message}`, { variant:"error" });
                setConnected(false)
            }
        })
    }
    const close = () => {
        setMenu(false)
        setToggle(false)
    }
  return (
    <div className={`w-full py-5 flex z-40 ${classs?'py-2 px-3 bg-eclablue fixed z-40 left-0 top-0':''}`}>
        <nav className="max_size md:flex hidden justify-between items-center">
            <Link to='/'>
                <img src="/assets/logos/eclahedge.png" alt="Commerce logo" className="h-10" />
            </Link>
            <ul className='flex text-white gap-5 items-center text-sm'>
                <li><Link to='/eclahedge'>Home</Link></li>
                <li><Link to='/eclahedge'>Investment Plans</Link></li>
                <li><Link to='/eclahedge'>Contact Us</Link></li>
                {!connected&&<li><button onClick={connectWallet} className="connect_btn px-5 py-2">Connect Wallet</button></li>}
                {connected&&
                    <div className="relative inline-block text-left">
                        <div>
                            <button onClick={()=>setMenu(true)} type="button" className="inline-flex w-full text-sm font-medium shadow-sm outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true"><BiUserCircle className='text-3xl text-white'/></button>
                        </div>
                        {menu&&
                            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-2 px-5" role="none">
                                    <Link to='/user-dashboard'><p className='text-gray-700 py-2' onClick={close}>Dashboard</p></Link>
                                    <Link to='/edit-profile'><p className='text-gray-700 py-2' onClick={close}>Edit Profile</p></Link>
                                    <Link to='/affiliate'><p className='text-gray-700 py-2' onClick={close}>Affiliate</p></Link>
                                </div>
                            </div>
                        }
                    </div>
                }
            </ul>
        </nav>
        <nav className='w-full flex md:hidden justify-between items-center py-2'>
            <img src="/assets/logos/eclahedge.png" alt="Commerce logo" className="sm:h-10 h-8" />
            {!toggle&&<BiMenuAltRight className='text-4xl text-white' onClick={()=>setToggle(true)}/>}
        </nav>
        {toggle&&(
            <div className='w-full md:hidden flex bg-eclablue/95 fixed top-0 left-0 h-screen'>
                <div className='w-10/12 h-full bg-eclablue py-5 px-3 flex flex-col gap-7 items-start'>
                    <img src="/assets/logos/eclahedge.png" alt="Commerce logo" className="sm:h-10 h-8" />
                    <ul className='flex flex-col text-white gap-7 text-sm'>
                        <li><Link onClick={()=>setToggle(false)} to='/eclahedge'>Home</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='/eclahedge'>Investment Plans</Link></li>
                        <li><Link onClick={()=>setToggle(false)} to='/eclahedge'>Contact Us</Link></li>
                        {!connected&&<li><Link to='/user-dashboard'><button onClick={connectWallet} className="connect_btn px-5 py-2">Connect Wallet</button></Link></li>}
                        {connected&&
                            <div className="relative inline-block text-left w-full">
                                <div>
                                    <button onClick={()=>setMenu(true)} type="button" className="inline-flex items-center gap-2 w-full text-sm font-medium shadow-sm outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true"><BiUserCircle className='text-3xl text-white'/>Profile</button>
                                </div>
                                {menu&&
                                    <div className="absolute left-0 mt-2 w-52 origin-top-right bg-white outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-2 px-5" role="none">
                                            <Link to='/user-dashboard'><p className='text-gray-700 py-2 font-semibold tracking-wider' onClick={close}>Dashboard</p></Link>
                                            <Link to='/edit-profile'><p className='text-gray-700 py-2 font-semibold tracking-wider' onClick={close}>Edit Profile</p></Link>
                                            <Link to='/affiliate'><p className='text-gray-700 py-2 font-semibold tracking-wider' onClick={close}>Affiliate</p></Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
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