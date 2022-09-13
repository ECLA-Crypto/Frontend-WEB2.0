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
    useEffect(() => {
        setComponent(<Loader/>);
        if(!token){
            navigate('/')
        } else {
          const verify = () => {
              axios.get('http://localhost:3600/api/user/verify', { headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Accept':'application/json' }})
              .then(res=>{
                console.log(res.data)
                if (res.data.status){
                  if (location==='editPage') {
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
        }
    }, [token,enqueueSnackbar,navigate,dispatch,location])
    
  return (
    <>
        {component}
    </>
  )
}

export default UserGuard