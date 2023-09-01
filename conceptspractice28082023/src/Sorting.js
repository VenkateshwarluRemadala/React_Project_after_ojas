import {React, useState} from 'react';

function Sorting(){
    const [data, setdata] = useState( [
        {
            name:"venkat"
        },
        {
            name:"pawan"
        },
        {
            name:"charan"
        },
        {
            name:"bharath"
        },
        {
            name:"balaram"
        },
        {
            name:"vinay"
        },
        {
            name:"kalyan"
        },
        {
            name:"ram"
        },
        {
            name:"bendi"
        },
        {
            name:"beans"
        },
        {
            name:"prawns"
        }
    ]);
    const lowerCaseGetSorted = ()=>{
        const sort = data.sort((a,b)=>a.name.localeCompare(b.name));
        setdata([...data]);
    }
    const upperCaseGetSorted = ()=>{
        const sort = data.sort((a,b)=>b.name.localeCompare(a.name));
        setdata([...sort])
    }
    return(
        <div>
            <button onClick={lowerCaseGetSorted}>lowerSort</button>
            <button onClick={upperCaseGetSorted}>upperSort</button>
            {
                data.map((ele, index)=><p key={index}>{ele.name}</p>)
            }
        </div>
    )
}
export default Sorting;