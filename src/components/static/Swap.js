import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
const styles = {
    style: {
        position: 'relative',
        margin: 'auto',
        width: 310,
        bgcolor: 'white',
        p: 4,
    },
    select: {
        color: 'white',
    },
    modal: {
        margin: "20px auto",
        overflow: "auto",
    }
};
const Swap = () => {
    const dispatch = useDispatch()
    const [allCoins, setAllCoins] = useState([])
    const topCoin = useSelector(state=>state.topCoin);
    const bottomCoin = useSelector(state=>state.bottomCoin);
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res=>{
        setAllCoins(res.data)
    })
    }, [])
    const [open, setOpen] = useState(false);
    const [bottomOpen, setBottomOpen] = useState(false);
    const [exchangeValue, setExchangeValue] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSearch('');
    }
    const handleBottomOpen = () => setBottomOpen(true);
    const handleBottomClose = () => setBottomOpen(false);
    const topToken = (tokenInfo) => {
        setOpen(false);
        axios.get(`https://api.coingecko.com/api/v3/coins/${tokenInfo.id}`).then(res=>{
            dispatch({type:"SET_TOP_COIN", payload:{coinInfo:res.data}});
        })
    }
    const bottomToken = (tokenInfo) => {
        setBottomOpen(false);
        axios.get(`https://api.coingecko.com/api/v3/coins/${tokenInfo.id}`).then(res=>{
            dispatch({type:"SET_Bottom_COIN", payload:{coinInfo:res.data}});
        })
    }
    const exchangeVal = event => {
        setExchangeValue(event.target.value)
    }
    const [search, setSearch] = useState('')
    const qucikPick = (coinId) => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`).then(res=>{
            dispatch({type:"SET_TOP_COIN", payload:{coinInfo:res.data}});
        })
    }
  return (
    <div className="lg:w-2/6 md:w-11/12 w-full mx-auto border-2 border-gray-600 rounded-xl flex flex-col justify-between lg:p-5 md:p-7 p-5 md:mt-0 mt-5" id="swap_bg">
        <div>
            <span className="flex justify-between itms-center">
                <h2 className="text-2xl font-bold text-white">Swap</h2>
                <span className="flex items-center">
                    <button onClick={()=>qucikPick('ethereum')}>
                    <img src="/assets/icons/eth.svg" className="h-7" alt="Polygon Logo"/>
                    </button>
                    <button onClick={()=>qucikPick('binancecoin')}>
                    <img src="/assets/icons/bin.svg" className="h-7 ml-2" alt="Binance LOGO"/>
                    </button>
                    <button onClick={()=>qucikPick('matic-network')}>
                    <img src="/assets/icons/polygon.svg" className="h-5 ml-2" alt="ECLA LOGO"/>
                    </button>
                </span>
            </span>
            <hr className="mt-3 border-gray-600"/>
        </div>
        <div className="lg:mt-0 mt-5">
            <span className="flex items-center">
                <div className='mt-3'>
                    {!topCoin.coinInfo? <Button onClick={handleOpen} variant='text' size='small' sx={styles.select}>Select Token <svg className="w-3.5 h-3.5 ml-2 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button>: <Button onClick={handleOpen} variant='text' size='small' sx={styles.select}><img className='w-8 h-8 rounded-full' src={topCoin.coinInfo.image.thumb} alt='Coin Logo'/><span className='ml-5 font-semibold text-sm'>{topCoin.coinInfo.symbol}</span><svg className="w-3.5 h-3.5 ml-3 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button> }
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={styles.modal} >
                        <Box sx={styles.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Select A Token</Typography>
                        <input type='search' onChange={(e)=>setSearch(e.target.value)} className='border-gray-400 border rounded px-3 py-1.5 w-full mt-3' placeholder='Search'/>
                        {allCoins.filter((items)=>{
                            if (search==='') {
                                return items;
                            } else if (items.name.toLowerCase().includes(search.toLowerCase())) {
                                return items;
                            }
                        }).map((items)=>{
                            return (
                                <Typography key={items.id} id="modal-modal-description" sx={{ mt: 2 }}><Button onClick={()=>topToken(items)} variant='text' size='small'><img className='w-10 h-10 rounded-full' src={items.image} alt='Coin Logo'/><span className='ml-2 flex flex-col gap-2 items-start'><p>{items.name}</p><p className='font-semibold'>{items.symbol}</p></span></Button></Typography>
                            )
                        })}
                        </Box>
                    </Modal>
                </div>
            </span>
            <input onChange={exchangeVal} type='number' className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg" />
        </div>
        <div className="lg:mt-0 mt-5">
            {/* <img src="/assets/icons/down.svg" className="h-5 mx-auto mt-4" alt="Down Chevron" /> */}
            <span className="flex items-center mt-4">
                <div>
                    {!bottomCoin.coinInfo? <Button onClick={handleBottomOpen} variant='text' size='small' sx={styles.select}>Select Token <svg className="w-3.5 h-3.5 ml-2 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button>: <Button onClick={handleBottomOpen} variant='text' size='small' sx={styles.select}><img className='w-8 h-8 rounded-full' src={bottomCoin.coinInfo.image.thumb} alt='Coin Logo'/><span className='ml-5 font-semibold text-sm'>{bottomCoin.coinInfo.symbol}</span><svg className="w-3.5 h-3.5 ml-3 text-gray-100" fill="currentColor" viewBox="0 0 330 330"><path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></svg></Button> }
                    <Modal open={bottomOpen} onClose={handleBottomClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" sx={styles.modal} >
                        <Box sx={styles.style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">Select A Token</Typography>
                        <input type='search' onChange={(e)=>setSearch(e.target.value)} className='border-gray-400 border rounded px-3 py-1.5 w-full mt-3' placeholder='Search'/>
                        {allCoins.filter((items)=>{
                            if (search==='') {
                                return items;
                            } else if (items.name.toLowerCase().includes(search.toLowerCase())) {
                                return items;
                            }
                        }).map((items)=>{
                            return (
                                <Typography key={items.id} id="modal-modal-description" sx={{ mt: 2 }}><Button onClick={()=>bottomToken(items)} variant='text' size='small'><img className='w-10 h-10 rounded-full' src={items.image} alt='Coin Logo'/><span className='ml-2 flex flex-col gap-2 items-start'><p>{items.name}</p><p className='font-semibold'>{items.symbol}</p></span></Button></Typography>
                            )
                        })}
                        </Box>
                    </Modal>
                </div>
            </span>
            <div className="px-4 py-3 rounded-lg border border-gray-600 w-full mt-2.5 outline-none font-medium text-white inp_bg h-12"> </div>
        </div>
        {!bottomCoin.coinInfo||!topCoin.coinInfo? <button disabled className='lg:mt-3 mt-10 py-3 text-gray-700 bg-gray-300 font-semibold rounded'>Select Coin</button> :  exchangeValue==='' ? <button disabled className='lg:mt-3 mt-10 py-3 text-gray-700 bg-gray-300 font-semibold rounded'>Enter An Amount</button> : <button className="swap_btn rounded font-semibold tracking-wider lg:mt-3 mt-10 py-3 text-white">Swap</button>}
    </div>
  )
}

export default Swap