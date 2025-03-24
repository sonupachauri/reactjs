import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook

  const passwordRef = useRef("");

  const passGen = useCallback(()=>{
        let pass= "";
        let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllow) str += "0123456789";
        if(charAllow) str += "!@#$%^&*()_+~{}[]";

        for (let i = 1; i < length; i++) {
          let char = Math.floor(Math.random()*str.length+1);

          pass += str.charAt(char)

        }

        setPassword(pass);

  },[length,numAllow,charAllow,setPassword])

  const copyPasswordToClickboard = useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,99);
        window.navigator.clipboard.writeText(password)
  },[password]);

  useEffect(()=>{
    passGen();
  },[length,numAllow,charAllow,passGen]);
 
  return (
    <>
      
         <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
         <p className='text-2xl text-center text-white my-3'> Password Generator</p>
           <div className='flex shadow rounded-lg overflow-hidden mb-4'>
             <input type='text' 
              value={password}
              className='outine-none w-full py-1  px-3'
              readOnly
              placeholder='password'
              ref={passwordRef}
             />

             <button onClick={copyPasswordToClickboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy </button>
           </div>
           <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-xl-1'>
                  <input 
                    type="range" 
                    min={6}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=> {setLength(e.target.value)}}
                  />
                  <label className='px-2'> Length: {length} </label>
                </div>

                <div className='flex items-center gap-xl-1'>
                  <input 
                    type="checkbox" 
                    defaultValue={numAllow}
                    id='numberInput'
                    onChange={()=> {
                      setNumAllow((prev)=>!prev)
                    }}
                  />
                  <label htmlFor='numberInput'> Numbers: </label>
                </div>

                <div className='flex items-center gap-xl-1'>
                  <input 
                    type="checkbox" 
                    defaultValue={numAllow}
                    id='charInput'
                    onChange={()=> {
                      setCharAllow((prev)=>!prev)
                    }}
                  />
                  <label htmlFor='charInput'> Characters: </label>
                </div>
           </div>
         </div>
    </>
  )
}

export default App
