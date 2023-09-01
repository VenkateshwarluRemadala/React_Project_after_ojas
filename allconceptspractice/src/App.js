// import logo from './logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Router from './Router';
import Login from './Login';
import Register from './Register';
import All_Comp from './All_Comp';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import ShowUser from './ShowUser';
import Home from './Home';
import Crud from './crud';
import Search from './Search';
import FormValidation from './FormValidation';
import Pagination from './Pagination';
export const context = createContext();
function App() {
 
  return (
    <div className="App">
       {/* <BrowserRouter> 
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/create' element = {<Create/>}/>
          <Route path='/update' element = {<Update/>}/>
          <Route path='/delete' element = {<Delete/>}/>
          <Route path='/showuser' element = {<ShowUser/>}/>
          <Route path='/home' element = {<Home/>}/>

        </Routes>
      </BrowserRouter> */}
      {/* <Crud/> */}
      {/* <Search/> */}
      {/* <FormValidation/> */}
      <Pagination/>
    </div>
  );
}

export default App;
