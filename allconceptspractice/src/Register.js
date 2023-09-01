import {React, createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';


// export const context = createContext();
function Register(){
    const [totalUserData, setTotalUsersData] = useState([]);
    const[object, setobject] = useState({});
    // context(totalUserData)

    localStorage.setItem("registerData", JSON.stringify(totalUserData))
    const navigate = useNavigate();
    const submitData = ()=>{
        console.log(object);
        totalUserData.push(object);
        setTotalUsersData([...totalUserData]);
        setobject({});
    }
    return(
        <div>
            <input type='text' placeholder='firtsName' onChange={(input)=>{setobject({...object, ...{firstName:input.target.value}})}}/><br></br>
            <input type='text' placeholder='lastName' onChange={(input)=>{setobject({...object, ...{lastName:input.target.value}})}}/><br></br>
            <input type='text' placeholder='email' onChange={(input)=>{setobject({...object, ...{email:input.target.value}})}}/><br></br>
            <input type='text' placeholder='password' onChange={(input)=>{setobject({...object, ...{phone:input.target.value}})}}/><br></br>
            <button onClick={submitData}>submitData</button>
            <button onClick={()=>{navigate('/')}}>Login</button>
       
        </div>
    )
}
export default Register;