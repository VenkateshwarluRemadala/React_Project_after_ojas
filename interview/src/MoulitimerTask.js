import {React, useEffect, useState} from 'react';
function MoulitimerTask(){
    const [val, setval] = useState()
    useEffect(()=>{
            function desplayVal(vals, show){
                if(vals<=60 ){
                    if(vals<=29){
                        setTimeout(()=>{
                            setval(show);
                            desplayVal(vals+1, show+1)

                        },1000);
                    }
                    else if(vals>=29){
                            setTimeout(()=>{
                                setval(show);
                                desplayVal(vals+1, show-1)
                            },1000);
                    }
                }
            }
            desplayVal(0, 0) 
    },[]);
    return(
        <div>
           <h1>hello world</h1>
           <h1 style={ val >5 && val<=15 ? {color:'red'} : val<=5 ? {color:'green'}:{color:'black'}}>{val}</h1>
        </div>
    )
}
export default MoulitimerTask;