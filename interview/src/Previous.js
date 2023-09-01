import axios from 'axios';
import {React, useEffect, useState} from 'react';
function Previous(){
    const [imageIndex, setImageIndex] = useState(0);
    const[data, setdata] = useState([]);
    useEffect(
        ()=>{  
        axios.get("https://dummyjson.com/products").then((data)=>{
            // console.log(data.data);
            setdata(data.data.products);
        });
    },[]);
    const nextfun = (ind)=>{
        setImageIndex(ind+1)
    }
    const prefun = (ind)=>{
        setImageIndex(ind-1)
    }
    return(
        <div>
            <h1>hello</h1>
            {
           data&&data.map((object, index)=> 
                    <div>     
                        {
                        imageIndex == index ? 
                        <div key={index}>
                            <button onClick={()=>{prefun(index)}}>Previous</button>
                            <img src={object.images[0]}/>
                            <button onClick={()=>{nextfun(index)}}>next</button>
                        </div>:"un mathced images"
                        }      
                    </div>    
            )
        }
        </div>    
    )
}
export default Previous;