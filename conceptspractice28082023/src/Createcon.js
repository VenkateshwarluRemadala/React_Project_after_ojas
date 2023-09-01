import {React, createContext} from 'react';
import Usecon from './Usecon';

export const context = createContext();
function Createcon(){
  return(
        <div>
            <context.Provider value={[{"name":"venkat"},{"name":"vinay"}]}>
                <Usecon/>

            </context.Provider>
        </div>
    )
}
export default Createcon;