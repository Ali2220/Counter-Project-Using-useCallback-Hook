import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setcount] = useState(0)

 
  const increment = useCallback(() => {

    setcount(count + 1)

    }, [count])

  const decrement = useCallback(() => {
    
    setcount(count - 1)

  }, [count])

  return (
    <>
      <div>
        <button className='bg-slate-950 text-yellow-300' onClick={increment}>Increment the Counter</button>
        <h1 className='my-5'>{count}</h1>
        <button className='bg-slate-950 text-yellow-300' onClick={decrement}>Decrement the Counter</button>
      </div>
    </>
  )
}

export default App
