import{React, createContext} from 'react';
import Router from '../src/Router';
export const userContext = createContext()
function Delete(){
   
    return(
        <div>
            <p>Delete user</p>
            <userContext.Provider value={[{
    name:"venkat",
    age:"222",
    phone:2222
}]}>
                <Router/>
            </userContext.Provider>
        </div>
    )
}
export default Delete;