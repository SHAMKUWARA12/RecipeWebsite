import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipies from './Components/Recipies';
import Cuisines from './Components/Cuisines';
import About from './Components/About';
import HomeFooter from './Components/Home/HomeFooter'
import AboutContact from "./Components/About/AboutContact";
const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipies' element={<Recipies />}></Route>
        <Route path='/cuisines' element={<Cuisines />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/about/contact' element={<AboutContact />}></Route>
        <Route path='*' element={<Navigate replace to='/'/>}></Route>
      </Routes>
      <HomeFooter />
    </>
  )
}
export default App;