import {React, useEffect, useState} from 'react';
function Pagination(){
    const [pages, setPages] = useState([]);
    const [displayPage, setDisplayPage] = useState(0);
    const users = [
        {
            name:"venkat",
            password:"123"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"kalyan",
            password:"456"
        },
        {
            name:"suresh",
            password:"456"
        },
        {
            name:"ram",
            password:"456"
        },
        {
            name:"shyam",
            password:"456"
        },
        {
            name:"elephant",
            password:"456"
        },
        {
            name:"vegitable",
            password:"456"
        },
        {
            name:"eggOmlet",
            password:"456"
        },
        {
            name:"bredOmlet",
            password:"456"
        }
    ];
    useEffect(()=>{
        let localPage = []
        for(let i=0; i<=Math.ceil(users.length/3); i++){
            localPage.push(i);
        };
        setPages([...localPage]);
    },[]);
console.log(users.length,"   ",Math.ceil(users.length/3));
const selectThePage = (page)=>{
    setDisplayPage(page);
}
const setThePreviousPage = ()=>{
    if(displayPage==0){
        setDisplayPage(displayPage)
    }else{
        setDisplayPage(displayPage-1)
    }

}
const setTheNextPage = ()=>{
    if(displayPage==pages.length-1){
        setDisplayPage(displayPage)
    }else{
        setDisplayPage(displayPage+1)
    }
}
    return(
        <div>
            <p>pagination works</p>
        {
            users.slice(displayPage*3-displayPage,3).map((ele,index)=><div key={index}>
                <p>{ele.name}</p>
                </div>)
        }
            <button onClick={setThePreviousPage}>previous</button>
            {
                pages.map((ele,index)=>
                <div key={index} style={{'display':'inline'}}>
                    <button style={ele == displayPage ? {color:'blue'}:{color:'black'}} onClick={()=>{selectThePage(index)}}>{ele+1}</button>
                </div>
                )
            }
            <button onClick={setTheNextPage}>next</button>
        </div>
    )
}
export default Pagination;