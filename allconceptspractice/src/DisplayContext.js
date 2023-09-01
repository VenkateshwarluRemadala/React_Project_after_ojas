import {React, useContext, useEffect, useRef, useState} from 'react';
import {context} from '../src/crud'

function GetPrevious(val){
    const ref = useRef();
    useEffect(()=>{
        ref.current = val;
    },[val]);
    return ref.current
}
function DisplayContext(props){
    const usecontext = useContext(context);
    const [currentState, setcurrentState] = useState("venkat");

    useEffect(()=>{
        console.log(props.value);

    },[])

    console.log(usecontext, "data");
    const ref = useRef();
    const previous = GetPrevious(currentState);
    const submitt = ()=>{
        setcurrentState(ref.current.value);
        props.parentfun(ref.current.value);
    }
    return(
        <div>
            <input type='text' ref={ref}/>
            <button onClick={submitt}>submit</button>
            <p>current:{currentState}</p>
            <p>previous:{previous}</p>
        </div>
    )
}
export default DisplayContext;