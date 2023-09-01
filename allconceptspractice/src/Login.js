import {React, useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");
    const [userData, setuserData] = useState([]);
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("registerData"));
        setuserData(userData)
        console.log(userData, "data");
    },[])
    const navigate = useNavigate();
   
  
    const loginPage = ()=>{
        userData.find((ele, index)=>{
            if(ele.firstName === name && ele.phone === phone){
                 navigate('/home')
            }
        })
    }

    return(
        <div>
            <p>login to webpage</p>
            <input type='text' onChange={(input)=>{setname(input.target.value)}}/><br></br>
            <input type='text' onChange={(input)=>{setphone(input.target.value)}}/><br></br>
            <button onClick = {loginPage}>Login</button>
            <button onClick={()=>{
                navigate('/register')
            }}>Register</button>
        </div>
    )
}
export default Login;