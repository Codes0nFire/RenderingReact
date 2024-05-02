import React, { useEffect } from 'react'

import axios from "../helpers/axios"
import { useState } from 'react'


const Home = () => {

  let[images,setimages]= useState([]);
  let [page,setpage]=useState(1);

  
const getimages= async ()=>{


 try {
  const {data}=await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
   
  setimages(data);
  console.log(images);
  
  
   
   
   
 }

 catch(err){
  console.log(err);
 }

 
  



}


var filluserdata= <h1 className='text-white' >Loading images .......</h1>

if(images.length>0){
  filluserdata= images.map(image=> {
    return <div key={image.id}   >
      
      
        <img className='w-72 h-72 rounded-md' src={image.download_url} alt="" />
        <h1 className='text-sm opacity-70 text-white' >Author:@{image.author}</h1>
        
     
      
      
    </div>
  } );
}


useEffect(()=>{
  getimages();

},[page])





  return (
    <div className='flex flex-wrap pb-5'>
      <h1 className='text-white' >Home Page</h1>
      <br />
      {/* <button className=' btn px-4 py-2 border border-red-500 rounded-lg' onClick={findUsers}>Get Users</button> */}

      <div className='pl-10 pt-10 flex flex-wrap gap-5'>
      {filluserdata}
      </div>

      <div className='flex gap-5 mt-10 pl-10' >
          <button onClick={()=> {if(page>1){setpage(page-1)}}} className=' text-white btn px-4 py-2 border border-white rounded-lg' >Prev</button>
          <button onClick={()=> setpage(page+1)} className=' text-white btn px-4 py-2 border border-white rounded-lg'>Next</button>
      </div>

       
    </div>
  )
}

export default Home
