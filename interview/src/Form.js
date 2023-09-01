import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import {pushObj}  from './Actions';
function Form(){
    const [totalData, settotalData] = useState([])
    const [obj, setobj] = useState({});
    const dispatch = useDispatch ()
    const sendData = ()=>{
        settotalData([...totalData, ...[obj]]);
        dispatch(pushObj(obj));
        setobj({});
    }
    // console.log(totalData);
    return(
        <div>
            <input type='text' onChange={(input)=>{
                setobj({...obj, ...{name:input.target.value}})
            }} />
             <input type='text' onChange={(input)=>{
                setobj({...obj, ...{age:input.target.value}})
            }} />
             <input type='text' onChange={(input)=>{
                setobj({...obj, ...{phone:input.target.value}})
            }} />
            <button onClick={sendData}>submitdata</button>
        </div>
    )

}
export default Form;