import {React, useEffect} from 'react';

function Component_B(props){
    console.log(props.val, "venkatesh");
    let array = ["child", "component", "twoo"];
    useEffect(()=>{
        props.func(array)

    },[])
    return (
        <div>
            <h1>Component_B</h1>
            {
                props.val.map((ele, index)=>
                <h1 key={index}>{ele}</h1>
                )
            }
        </div>
    )

}
export default Component_B;