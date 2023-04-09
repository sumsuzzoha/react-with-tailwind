import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import PriceList from './components/priceList/PriceList'
// import Dashboard from './components/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <Navbar></Navbar>
  <h1 className='text-7xl text-purple-600'>hello from tail wind</h1>
  <PriceList></PriceList>
  {/* <Dashboard></Dashboard> */}
</div>
  )
}

export default App
