import { useState } from 'preact/hooks'
import './app.css'
import Counter from './Components/Counter'

export function App() {

  return (
    <>
      
      {/* <div class="card">
        <h1>{count}</h1><br/>
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
         count +1
        </button><br/>
        <button className='btn btn-warning' onClick={() => setCount((count) => count - 1)}>
          count -1
        </button>
       
      </div> */}
      <Counter/>
      </>
  )
}
