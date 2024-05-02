import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Profile = () => {

const Navigate=useNavigate();//hook
const submitHandler=()=>{
 Navigate("/");
}

  return (
    <div className='flex text-white items-center justify-center'>
      <h1 >Profile Page</h1>

      {/* <form action="">
      <button onClick={submitHandler} className='p-1 bg-black text-white text-sm rounded-md'>Home</button>
      </form> */}
    </div>
  )
}

export default Profile
