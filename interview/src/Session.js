import {React, useState} from 'react';
function Session(){    
    const [state, setstate] = useState([2,3,4,5]);
    const [get, setget] = useState('');
    const [obj, setobj] = useState({name:"", age:"", phone:"", pan:""})
    const getVal = ()=>{
        // console.log(val, "gett");
        state.push(get);
        setstate([...state]);

    }
    const submitdata = ()=>{
        console.log(obj)
    }
    return(
        <div>
            <h1>first</h1>
            {/* <h1>{val}</h1> */}
            {
              state.map((ele, index)=>
                <h1 key={index}>{ele*2}, {index}</h1>
                
              )  
            }
            {/* <input  type='text' onChange={(val)=>{ setget(val.target.value)}


                }/>
            <button onClick={getVal}>pushIbnputNumber</button> */}


            <input  type='text' onChange={(val)=>{ setobj({...obj,...{name:val.target.value}})}}/>
            <input  type='text' onChange={(val)=>{ setobj({...obj,...{age:val.target.value}})}}/>
            <input  type='text' onChange={(val)=>{ setobj({...obj,...{phone:val.target.value}})}}/>
            <input  type='text' onChange={(val)=>{ setobj({...obj,...{pan:val.target.value}})}}/>

            <button onClick={submitdata}>Submitt</button>
        </div>
    )
}
export default Session;