import React from 'react'

import axios from "../helpers/axios"
import { useState } from 'react'

const Home = () => {

  const [users,setusers]=useState([])

  
const findUsers= async ()=>{


 try {
  const {data}=await axios.get("/users");
   setusers(data);
   
   
   
 }

 catch(err){
  console.log(err);
 }

 
  



}


var filluserdata= <h1>Loading users .......</h1>

if(users.length>0){
  filluserdata= users.map(user=> {
    return <div key={user.id} className='w-full  border  flex flex-col gap-2 px-5  ' >
      
      <div>
        <h1 className='text-xl' >Name={user.name}</h1>
        <h3 className='text-sm' >@{user.username}</h3>
      <h3> Email={user.email}</h3>
      </div>
      
    </div>
  } );
}








  return (
    <div className='flex items-center justify-center flex-col'>
      <h1>Home Page</h1>
      <br />
      <button className=' btn px-4 py-2 border border-red-500 rounded-lg' onClick={findUsers}>Get Users</button>

      <div className='pt-5 w-screen'>
      {filluserdata}
      </div>

       
    </div>
  )
}

export default Home
