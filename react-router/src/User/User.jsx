import react from 'react'
import {Link, NavLink} from 'react-router'
import { useParams } from 'react-router'

export default function User() {
    const {userid} = useParams()
   return(
     <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div> 
   )
}