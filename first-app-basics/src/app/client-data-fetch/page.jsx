'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link';
// here we will use useEffecthook, swr and useSwr hook //with loading state
function clientsidedata() {
const [loading,setLoading]=useState(false);
const [users,setUsers]=useState([])
console.log("Client data fetch data-->",users) 
async function fetchClientSide(){
  try{
    setLoading(true)
    const apiResponse=await fetch("https://dummyjson.com/users");
    const result=await apiResponse.json();
    if(result?.users)
    {
      setUsers(result.users);
      setLoading(false);
    }
  }
  catch(e)
  { 
    console.log(e)
    setUsers([]);
    setLoading(false);
  }
}

useEffect(()=>{
  fetchClientSide()
},[])



if(loading)
{
  return(
    <h3 className='text-center w-[100%] font-bold text-4xl m-[50px]'>
    Loading Users ! Please Wait........
    </h3>
  )
}
  return (
    <div className='w-[100%] bg-green-900 text-white overflow-hidden h-[100vh] flex flex-col justify-center items-center'>
    <h2 className='text-center text-5xl m-5 w-[100%]'>client side data fetching</h2>
    <ul className="w-[60%] h-auto bg-white rounded-md overflow-auto flex  flex-wrap scrollwidth-thin align-center text-center">
    {
      users && users.length > 0 ?
      users.map(user=>
        <Link href={`/client-data-fetch/${user.id}`}>
        <li key={user.id} className="text-1xl m-5 text-red-500 grow w-[150px]">
        {user.firstName} {user.lastName}</li></Link>)
        :null
      }
    </ul>
    </div>
  )
}

export default clientsidedata