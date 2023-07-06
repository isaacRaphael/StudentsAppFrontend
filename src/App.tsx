import { useState } from 'react'
import Registration from './Pages/Registration'
import View from './Pages/View'
import './App.css'

function App() {
  const [tab, setTab] = useState("register")
  const baseUrl = "https://localhost:7202/"

  return (
    <>
    <nav className="w-screen px-10 py-5 flex justify-between bg-white sticky top-0">
     <h1>Student App</h1> 
    <ul className='flex px-4 gap-5'>
      <li onClick={() => setTab("register")} className='cursor-pointer underline'>Register</li>
      <li onClick={() => setTab("view")} className='cursor-pointer underline'>View</li>
    </ul>
    </nav>
     {tab == "register" && <Registration baseUrl={baseUrl}/>}
     {tab == "view" && <View baseUrl={baseUrl}/>}
    </>
  )
}

export default App
