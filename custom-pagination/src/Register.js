import {React, useRef, useState} from 'react';

function Register(){
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const ref = useRef();

    const registerData = ()=>{
        console.log(name, password);
        console.log("gettname", ref.current.value);
        localStorage.setItem('userCredentials', JSON.stringify({name:name, password:password}))

    }
    return(
        <div>
            {/* <input type='text' onChange={(e)=>{setname(e.target.value)}}/>
            <input type='text'onChange={(e)=>{setpassword(e.target.value)}}/>; */}
            <input type='text' ref={ref}/>
            <button onClick={registerData}>submit</button>
        </div>
    )

}
export default Register;