
import {React, useEffect, useRef, useState} from 'react';


function GetPrevious(val){
    const refff = useRef();

    useEffect(()=>{
        refff.current = val;

    },[val]);
    
    return refff.current
}

function Ref(){
    const [data, setdata] = useState("venkat");
    const reff = useRef();

    const previous = GetPrevious(data);
   
    const get = (e)=>{
        e.preventDefault();
        // console.log(data, "current");
        setdata(reff.current.value)
        
        console.log(previous, "previous");
    }
    return(
        <div>
            <input type='text' ref={reff} />
            <button onClick={get}>getdata</button>
            <p>{data}</p>
            <p>{previous}</p>
        </div>
    )
}
export default Ref;