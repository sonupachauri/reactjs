import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Red"}} onClick={()=>setColor("red")}> Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}} onClick={()=>setColor("green")}> Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}} onClick={()=>setColor("blue")}> Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} onClick={()=>setColor("black")}> Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}> None</button>
       </div>
       </div>
      </div>
    </>
  )
}

export default App
