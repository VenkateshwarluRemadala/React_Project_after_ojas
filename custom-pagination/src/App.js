import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pagination from './Pagination';
import Register from './Register';
import Login from './Login';

function App() {
  const arr = [
    {
      name: "venkat",
      age: 20,
      phone: 123
    },
    {
      name: "one",
      age: 20,
      phone: 1234
    },
    {
      name: "three",
      age: 221,
      phone: 1222
    },
    {
      name: "four",
      age: 24,
      phone: 123111
    },
    {
      name: "five",
      age: 25,
      phone: 12367
    },
    {
      name: "six",
      age: 26,
      phone: 12322
    },
    {
      name: "seven",
      age: 27,
      phone: 123555
    },
    {
      name: "eigth",
      age: 28,
      phone: 1232123
    },
    {
      name: "nine",
      age: 29,
      phone: 123555
    },
    {
      name: "ten",
      age: 34,
      phone: 123333
    },
    {
      name: "leven",
      age: 345,
      phone: 12999
    },
    {
      name: "twelve",
      age: 67,
      phone: 1235666
    },
    {
      name: "thirteen",
      age: 78,
      phone: 123999
    },
    {
      name: "fouteen",
      age: 80,
      phone: 16789
    },
    {
      name: "fifteen",
      age: 81,
      phone: 765589
    }
  ];
  const [show, setShow] = useState(0);
  return (
    <div className="App">
      {/* <h1>paginatio</h1>

      {
       show>=0 && show<=arr.length-1 ? <p>{arr[show].name}</p>: <p>{arr[arr.length-1].name}</p>
      }
      {
       show>=0 && show<=arr.length-1 ? <p>{arr[show].age}</p>: <p>{arr[arr.length-1].age}</p>
      }
      {
       show>=0 && show<=arr.length-1 ? <p>{arr[show].phone}</p>: <p>{arr[arr.length-1].phone}</p>
      }
      <div >
        <button onClick={()=>{
          show>0 ? setShow(show-1):setShow(0)
          }}>previous</button>
    
        <button onClick={()=>{
          show == arr.length-1 ? setShow(arr.length-1):setShow(show+1)
        }
          }>next</button>
      </div> */}


      <Pagination/>
      {/* <Register/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
