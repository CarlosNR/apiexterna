import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&display=swap" rel="stylesheet"/>

      <Navbar/>
      <div className='container'>
        <Outlet/>
      </div>
    </>
  )
}

