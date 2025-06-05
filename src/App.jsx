import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search' 
import News from './pages/News'
import Settings from './pages/Settings'
import Bookmarked from './pages/Bookmarked'
import Navbar from './components/generalComponents/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-poppins bg-background text-text relative'>
        <BrowserRouter>
          <Routes>
            <Route index path='/Home' element={<Home/>}></Route>
            <Route path='/Search' element={<Search/>}></Route>
            <Route path='/Settings' element={<Settings/>}></Route>
            <Route path='/Bookmarked' element={<Bookmarked/>}></Route>
            <Route path='/News' element={<News/>}></Route>
          </Routes>
        </BrowserRouter>
        <Navbar/>
      </div>
    </>
  )
}

export default App
