
import axios from 'axios';
import{React, useEffect} from 'react';

function Integrate(){

   useEffect(()=>{
        axios.get("http://localhost:8080/getData").then(data=>console.log(data))
   },[])
    return(
        <div>
            <p>Integrate</p>
        </div>
    )
}
export default Integrate;