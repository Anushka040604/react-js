import { useState, useCallback, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useCallback-id character or symbols change keep it in cache-memomization and use for optimization
  //useEffect-if there is any change in array update it and run
  const PasswordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '@#$%^&*=[]{}~`'
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, charAllowed, numAllowed])

  const handleCopyPassword=useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,3)
    navigator.clipboard.writeText(password)
  },[password])
  //useRef hook
  const passwordRef=useRef(null);
  return (
    <div className='min-h-screen bg-gray-800 flex flex-col items-center justify-center'>
      <h1 className='text-4xl text-center text-white mb-8'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden bg-gray-500 w-full max-w-md'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-2 px-3 text-lg'
          placeholder='Generated password'
          readOnly
          ref={passwordRef}
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors duration-200'
          onClick={handleCopyPassword}

        >
          Copy
        </button>
      </div>
      <div className='flex flex-col gap-y-4 mt-4'>
        <div className='flex items-center gap-x-2'>
          <label>Length:</label>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
          />
          <span>{length}</span>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            id='numbers'
            checked={numAllowed}
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
          />
          <label htmlFor='numbers'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            id='symbols'
            checked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
          />
          <label htmlFor='symbols'>Include Symbols</label>
        </div>
        <button
          className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 mt-4'
          onClick={PasswordGenerator}
        >
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default App
//useEffect called when page load first it runs and when array is updated whenever there is change in value useEffect will again invoke