import {React, useState} from 'react';
function Search(){
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
    const [filterdData, setfilteredData] = useState( [
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
    const filterdDataFun = (input)=>{
        const filter = data.filter((ele)=>{
            return ele.name.toLowerCase().includes(input.toLowerCase())
        });
        setfilteredData([...filter])

    }
    return(
        <div>
            <input type='text' onChange={(input)=>{filterdDataFun(input.target.value)}}/>
            {
                filterdData.map((ele,index)=><p key={index}>{ele.name}</p>)
            }
        </div>
    )
}
export default Search;