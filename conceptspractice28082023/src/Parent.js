import {React, useState} from 'react';
import Child from './Child';

function Parent(){
    const name = "parent data, venkat";
    const [childDat, setchilddata] = useState('');

    localStorage.setItem('data', JSON.stringify([{name:"venkat"}, {name:"vinay"}]))
    // const getChildDta = (childData)=>{
    //     setchilddata(childData);

    // }
    const data = [1,2,3,4,5];
    const getValue = (val)=>{
        console.log(val);

    }
    return(
        <div>
            {/* <Child sendName = {name} getChildData = {getChildDta}/> */}
            {/* <p>{childDat}</p> */}
            <select onChange={(input)=>{getValue(input.target.value)}}>
                {
                    data.map((ele)=><option value={ele}>{ele}</option>)
                }
            </select>
        </div>
    )
}
export default Parent