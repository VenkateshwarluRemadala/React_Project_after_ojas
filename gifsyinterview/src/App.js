// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Books from './Books';
import Home from './Home';
import Student from './Student';

function App() {

  const obj = {
     "employee":
                { "firstName": "Jane", "lastName": "Smith", "position": "Developer", "salary": 50000 },
    "projects": ["Project A", "Project B"], 
    "active": true }
    useEffect(()=>{
      let obj1 = {};
      for(let i in obj){
        if(typeof obj[i] == 'object'){
          obj1[i] = obj[i]
        }else if(Array.isArray(obj[i])){
          obj1[i] = obj[i]
        }
      }
    },[])
  return (
    <div className="App">
      {/* <Student/>
      <Books/> */}
      {/* <Home/> */}
     {
      Object.values(obj).map((ele, index)=>typeof ele == 'object'? Object.values(ele).map((ele, index)=><p>{ele}</p> :  Array.isArray(ele) ? ele.map((ele1, index)=><p key={index}>{ele1}</p>:null)))
     }

    </div>
  );
}

export default App;
