import Home from "./Components/Home";
import React from 'react';
import {  Routes, Route,  } from 'react-router-dom';
import Navbar from "./Components/Navbar";

 

const App = () => {
  return (
    <>
       <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route exact path='/about' element={<About/>}/> */}
    </Routes>
  
    </>
  )
};

export default App;




