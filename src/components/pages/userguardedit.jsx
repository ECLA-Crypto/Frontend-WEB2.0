import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../static/Loader'
import { useSnackbar } from 'notistack';
import Editprofile from './Editprofile'
const UserGuard = ({location}) => {
    const { enqueueSnackbar } = useSnackbar();
    let token = localStorage.accessToken
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [component, setComponent] = useState("")
    setComponent(<Loader/>);
    useEffect(() => {
        if(!token){
            navigate('/')
        }
        const verify = async () =>{
            await axios.get('https://ecla-backend.vercel.app/api/user/verify', {headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }}).then((res)=>{
              if(res.data.status){
                dispatch({type:"SET_GUARD_LOCATION", payload:res.data.message})
                if (location=='editPage') {
                    setComponent(<Editprofile/>)
                } else {
                    navigate('/')
                }
              }else{
                  navigate('/')
                  localStorage.removeItem('token')
                }
            }).catch(err =>{
                enqueueSnackbar('An Error Occured, Please Check Your Internet Connection.', { variant:"error" });
                navigate('/')
            })
          }
          verify();
    }, [token,enqueueSnackbar,navigate,dispatch,location])
  return (
    <>
       {component}
    </>
  )
}

export default UserGuard