import axios from "axios"
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CommerceNav from "../static/CommerceSection/CommerceNav"

const Editprofile = ({walletAddress}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileUsername = useSelector(state=>state.profileUsername)
  const profileEmail = useSelector(state=>state.profileEmail)
  const profileWalletAddress = useSelector(state=>state.profileWalletAddress)
  const profileImage = useSelector(state=>state.profileImage)
  const { enqueueSnackbar } = useSnackbar();
  const [usernameMessage, setUsernameMessage] = useState(false)
  const [emailMessage, setEmailMessage] = useState(false)
  const [updatedUsername, setUpdatedUsername] = useState(true)
  const [updatedEmail, setUpdatedEmail] = useState(true)
  useEffect(() => {
    axios.post('https://ecla-backend.vercel.app/api/user/findWallet',{walletAddress}).then(res=>{
      if (res.data.status) {
        dispatch({type:"SET_PROFILE_USERNAME", payload:res.data.result.username})
        dispatch({type:"SET_PROFILE_EMAIL", payload:res.data.result.email})
        dispatch({type:"SET_PROFILE_WALLETADDRESS", payload:res.data.result.walletAddress})
        dispatch({type:"SET_PROFILE_IMAGE", payload:res.data.result.profileImage})
      } else {
        enqueueSnackbar(`${res.data.message}`, { variant:"error" });
        navigate('/eclahedge')
      }
    })
  }, [walletAddress,enqueueSnackbar,dispatch, navigate])
  // Check if username is existing in the db
  const updateUsername = (e) => {          
    axios.post('https://ecla-backend.vercel.app/api/user/update/username', { walletAddress,username:profileUsername }).then((res)=>{
      console.log(res.data)
      if (res.data.status) {
        setUpdatedUsername(true)
      } else {
        setUpdatedUsername(false)
        setUsernameMessage(`${res.data.message}`)
      } 
    }).catch(err=>{
      setUpdatedUsername(false)
      enqueueSnackbar(`${err.message}`, { variant:"error" });
    })
    dispatch({type:"SET_PROFILE_USERNAME", payload:e.target.value})
  }
  // Check if email is existing in the db
  const updateEmail = (e) => {          
    axios.post('https://ecla-backend.vercel.app/api/user/update/email', { walletAddress,email:profileEmail }).then((res)=>{
      if (res.data.status) {
        setUpdatedEmail(true)
      } else {
        setUpdatedEmail(false)
        setEmailMessage(`${res.data.message}`)
      } 
    }).catch(err=>{
      setUpdatedEmail(false)
      enqueueSnackbar(`${err.message}`, { variant:"error" });
    })
    dispatch({type:"SET_PROFILE_EMAIL", payload:e.target.value})
  }
  // Edit Button function
  const editProfile = () => {
    if (updatedUsername&&updatedEmail) {
      axios.post('https://ecla-backend.vercel.app/api/user/editprofile', {
        walletAddress,
        updateUsername:updatedUsername,
        updateEmail:updatedEmail,
        email:profileEmail,
        username:profileUsername,
        profileImage
      }).then((res)=>{
        if (res.data.status){
          enqueueSnackbar(`${res.data.message}`, {variant:"success"});
        } else {
          enqueueSnackbar(`${res.data.message}`, {variant:"error"});
        }
        console.log(res.data)
      }).catch(err=>{
        enqueueSnackbar(`${err.message}`, { variant:"error" });
      })
    }
  }
   
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-eclaLightSkyBlue/30 to-eclaSkyBlue">
      <div className="categories_Section flex-col">
        <CommerceNav/>
      </div>
      <div className="max_size w-full mt-5">
        <div className="w-fit px-10 bg-white flex flex-col gap-3 py-10 rounded mx-auto my-auto">
          <p className="text-2xl md:text-3xl font-semibold text-center text-black/90">Edit Your Profile</p>
          <div>
            <input type="text" value={profileUsername} onChange={updateUsername} placeholder="Username" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
            {usernameMessage&&(<p className="text-red-700 text-sm ml-2">{usernameMessage}</p>)}
          </div>
          <div>
            <input type="email" value={profileEmail} onChange={updateEmail}  placeholder="Email Address" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
            {emailMessage&&(<p className="text-red-700 text-sm ml-2">{emailMessage}</p>)}
          </div>
          <input type="text" value={profileWalletAddress} disabled={true} placeholder="WalletAddress" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
          <input type="text" value={profileImage} onChange={(e)=>dispatch({type:"SET_PROFILE_IMAGE", payload:e.target.value})} placeholder="Profile Image" className="w-full px-3 font-semibold py-2.5 border outline-none border-eclaLightSkyBlue/20 rounded-lg text-xs"/>
          <button className="px-5 py-2 bg-eclaLightSkyBlue rounded mx-auto w-fit text-white" onClick={editProfile}>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Editprofile