import {React, useEffect, useState} from 'react';

function Pagination(){
    const data = [
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
    ];
    const[pages, setpages] = useState([]);
    const [showPage, setShowPage] = useState(1);
    useEffect(()=>{
        let pageArray = [];
       let iter = Math.ceil(data.length/3)
        for(let i=0; i< iter; i++){
            pageArray.push(i);
            console.log(i);
        }
        console.log(pageArray, data.length);
        setpages(pageArray)

    },[]);
    const previous = ()=>{
       console.log(showPage);
       if(showPage == 1){
        setShowPage(showPage)
       }else{
        setShowPage(showPage-1);
       }

    }
    const next = ()=>{
        if(showPage == pages.length){
            setShowPage(showPage)
           }else{
            setShowPage(showPage+1);
           }
    }
    return(
        <div>
            {
                data.slice(showPage*3-3, showPage*3).map((ele, index)=><p>{ele.name}</p>)
            }
            <button onClick={previous}>previous</button>
            {
                pages.map((page, index)=><p style={{'display':'inline'}}><button key={index} onClick={()=>{setShowPage(page+1)}}>{index+1}</button></p>)
            }
            <button onClick={next}>next</button>
        </div>
    )
}
export default Pagination;