import react, { useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router'

export default function Github() {
    const [data,setData]= useState('')
    useEffect(()=>{
         fetch('https://api.github.com/users/sonupachauri')
         .then((res)=> res.json())
         .then((data)=>{
            console.log(data)
            setData(data);
         })
    },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p>Github Followers:{data.followers}</p>
            <img src={data.avatar_url} className='text-center' width={200} height={200}/>
        </div>
    )
}