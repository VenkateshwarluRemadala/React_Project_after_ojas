import {React, useContext} from 'react';
import {userContext} from '../src/Delete'
function Router(){
   
    const context1 = useContext(userContext);
    console.log(context1, "venkat");
    console.log("venkattttt");
    
    return(
        <div>
               {
                context1.map((ele)=><p>{ele.name}</p>)
               }   
        </div>
    )
}
export default Router;