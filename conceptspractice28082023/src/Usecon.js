import {React, useContext} from 'react';
import {context} from '../src/Createcon'
function Usecon(){
    const use = useContext(context);
    console.log(use);
    return(
        <div>
            {
                use.map((ele, index)=><p>{ele.name}</p>)
            }
        </div>
    )
}
export default Usecon;