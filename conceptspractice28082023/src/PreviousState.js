import {React, useEffect, useRef, useState} from 'react';

function GetPreviousState(state){
    const ref = useRef(null);
    useEffect(()=>{
        ref.current = state;
    },[state]);
    return ref.current;
}
function PreviousState(){
    const [name, setname] = useState("venkat");
    const ref = useRef();
    const PreviousState = GetPreviousState(name);
    const submitData = ()=>{
        setname(ref.current.value)
    }
    
    return(
        <div>
            <input type='text' ref={ref}/>
            <button onClick={submitData}>submit</button>
            <p>current State: {name}</p>
            <p>previous State: {PreviousState}</p>
        </div>
    )
}
export default PreviousState;