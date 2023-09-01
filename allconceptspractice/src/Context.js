import {React, useContext} from 'react';
import {context} from '../src/App';
import {  useNavigate } from 'react-router-dom';

function Context(){
    const contex = useContext(context);
    const navigate = useNavigate()
    // const nav = Navigate()
    console.log(contex, "cont");
    const gocontext = ()=>{
        // navigate('/')
        navigate("increament")

    }

    return(
        <div>
            {/* <context.Consumer>
                {
                    data=><div>
                     context   <p>{data.name}</p>
                     context age  <p>{data.age}</p>
                    </div>
                }
            </context.Consumer> */}
            {/* <button onClick={gocontext}>go to context</button> */}
            <p>dashboard</p>
            <button onClick={()=>{
                navigate("/")
            }}>Logout</button>
        </div>
    )
}
export default Context;