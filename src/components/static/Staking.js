import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 310,
    bgcolor: '#171840',
    boxShadow: 24,
    p: 4,
    color: '#fff'
  };
  
const Staking = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setAmount(0);
    };
    const [amount, setAmount] = useState(0)
    const handleChange = (event) => {
        setAmount(event.target.value);
    };
  return (
    <div className="relative w-full">
        <h1 className="text-3xl font-bold text-gray-200 text-center mt-4">Stake Your ECLA Token</h1>
        <hr className="border-gray-400 mt-5"/>
        <div className="mt-7 w-full flex flex-col">
            <button className="rounded-lg bg-gray-600 bg-opacity-30 px-3 text-white font-semibold py-2 mx-auto flex gap-4 items-center"><img src='/assets/logos/MetaMaskLogo.svg' className='w-7 h-7' alt='platform logo'/>awdawdjawk...awdaw</button>
            <div className="flex justify-center items-center gap-10 flex-wrap mt-7">
                <div className="border-2 border-gray-700 bg-gray-600 bg-opacity-20 flex flex-col justify-center items-center py-5 px-3 rounded w-64">
                    <p className="active">Total Staked</p>
                    <h1 className="font-semibold text-gray-200 uppercase text-2xl mt-2">0 ECLA</h1>
                </div>
                <div className="border-2 border-gray-700 bg-gray-600 bg-opacity-20 flex flex-col justify-center items-center py-5 px-3 rounded w-64">
                    <p className="active">Available Reward</p>
                    <h1 className="font-semibold text-gray-200 uppercase text-2xl mt-2">0 ECLA</h1>
                </div>
                <div className="border-2 border-gray-700 bg-gray-600 bg-opacity-20 flex flex-col justify-center items-center py-5 px-3 rounded w-64">
                    <p className="active">Staked Duration</p>
                    <h1 className="font-semibold text-gray-200 uppercase text-2xl mt-2">0 ECLA</h1>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap mt-7">
                <button className="transfer_btn rounded-full px-3 text-white w-36 font-semibold py-2 flex justify-center gap-4 items-center" onClick={handleOpen}><img src='/assets/icons/eclaStack.png' className='w-5 h-5' alt='Stake logo'/>Stake</button>
                <button className="transfer_btn rounded-full px-3 text-white w-32 font-semibold py-2">Withdraw</button>
                <button className="transfer_btn rounded-full px-3 text-white w-32 font-semibold py-2">Claim</button>
            </div>
            <h4 className="font-bold text-lg text-gray-200 mx-auto mt-8 mb-3">Token Balance: 0 ECLA</h4>
        </div>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <div className='w-full flex justify-between items-center'>
                    <h2>Enter Amount</h2>
                    <img src='/assets/icons/close.svg' className='w-7 h-7 cursor-pointer' onClick={handleClose} alt='Close button'/>
                </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input type='number' className='w-full rounded bg-transparent py-1.5 border border-gray-100 px-3' value={amount} onChange={handleChange}/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="w-full flex">
                    <button className="transfer_btn rounded-lg ml-auto px-3 text-white w-32 py-2">Stake</button>
                </div>
            </Typography>
        </Box>
        </Modal>
    </div>
  )
}

export default Staking