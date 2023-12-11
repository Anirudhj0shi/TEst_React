import { useState } from 'preact/hooks'

import './app.css'
import Fetach from './components/Fetach'


export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Fetach></Fetach> 
  </>
  )
}
