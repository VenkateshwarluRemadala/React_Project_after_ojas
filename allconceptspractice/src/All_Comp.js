import {React} from 'react';
import { useNavigate,BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import ShowUser from './ShowUser';
import Login from './Login';
import Register from './Register';

function All_Comp(){
    // const navigate = useNavigate()
    return(
        <div>
            {/* <button onClick={()=>{navigate('/create')}}>CreateUser</button>
            <button onClick={()=>{navigate('/update')}}>UpdateUser</button>
            <button onClick={()=>{navigate('/delete')}}>DeleteUser</button>
            <button onClick={()=>{navigate('/showuser')}}>showAllUsers</button>
            <button onClick={()=>{navigate("/login")}} >Logout</button> */}
    <BrowserRouter> 
    <li>
      <Link to="/create">create</Link>
    </li>
    <li>
      <Link to="/update">update</Link>
    </li>
    <li>
      <Link to="/delete">delete</Link>
    </li>
    <li>
      <Link to="/showuser">showuser</Link>
    </li>
        <Routes>
          {/* <Route path='/' element = {<Login/>}/> */}
          {/* <Route path='/register' element = {<Register/>}/> */}
          {/* <Route path='/context' element = {<Context/>}/> */}
          {/* <Route path='/all_comp' element = {<All_Comp/>}/> */}
          <Route path='/' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/create' element = {<Create/>}/>
          <Route path='/update' element = {<Update/>}/>
          <Route path='/delete' element = {<Delete/>}/>
          <Route path='/showuser' element = {<ShowUser/>}/>
        </Routes>
      </BrowserRouter>

        </div>
    )
};
export default All_Comp;