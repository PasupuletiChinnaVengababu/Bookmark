import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Bookmark/Home'
import { Route, Routes } from 'react-router-dom'
import Verification from './components/Verification'
import Features from './Bookmark/Features'
import { Sample } from './Bookmark/Sample'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='h-screen' style={{background:"#002a5a"}}> 
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/verification" element={<Verification/>}/>
        </Routes>
      </div> */}
      <Home/>
      <Features/>
      {/* <Sample/> */}
    </>
  )
}

export default App
