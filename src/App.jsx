import React from 'react'
import{BrowserRouter , Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
import Addbooks from './pages/Addbooks'
import About from './pages/About'
import Navbar from './components/Navbar'
import ToggleBtn from './components/ToggleBtn'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/about'element={<About/>}/>
            <Route path='/contact'element={<Contact/>}/>
            <Route path='/addBooks'element={<Addbooks/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/signup'element={<Signup/>}/>
            <Route path='*'element={<ErrorPage/>}/>
            <Route element={<ToggleBtn/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
