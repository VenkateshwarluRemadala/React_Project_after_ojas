import{React, useEffect, useRef, useState} from 'react';

function CustomHooktoGetPrevious(val){
    const ref = useRef();
    useEffect(()=>{
        ref.current = val
    },[val]);
    return ref.current;
}

function GetPreviousState(){
    const [data, setdata] = useState("venkat");
    const ref = useRef();
  const val =   CustomHooktoGetPrevious(data)
    const settingData = ()=>{
        setdata(ref.current.value)
    }
    return(
        <div>
            <input type='text' ref={ref}/>
            <button onClick={settingData}>setdata</button>
            <p>current state: {data}</p>
            <p>previous state: {val}</p>

        </div>
    )
}
export default GetPreviousState;