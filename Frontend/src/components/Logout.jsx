import React from 'react'
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser]=useAuth()
    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully");
            setTimeout(()=> {
                window.location.reload();
            },2000);
        }catch (error){
            toast.error("Error:" + error.message);
            window.location.reload();
            setTimeout(()=> {},2000);
        }
    }
  return (
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700'
    onClick={handleLogout}>
    Logout</button>
  )
}

export default Logout;