import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ShowUser() {
    const getTotalData = useSelector(data => data);
    const [filteredData, setfilteredData] = useState([])
    useEffect(()=>{
        setfilteredData(getTotalData)

    },[])
    const navigate = useNavigate();
    const [input, setinputs] = useState("");

    const filter = (input)=>{
      const filtere =   getTotalData.filter((ele)=>ele.name.toLowerCase().includes(input.toLowerCase()))
        setfilteredData([...filtere])
    }
const sorting = ()=>{

//    let val =  filteredData.sort((a,b)=>
//         {
//             a.namelocaleCompare(b.name)
//         }
//     );
//    console.log(val);
let array = [
    {
        name:"venkat",
        age:20
    },
    {
        name:"aravind",
        age:20
    },
    {
        name:"zen",
        age:20
    }
    ]
    let val = array.sort((a,b)=>a.name.localeCompare(b.name));
    console.log(val)
}

    return (
        <div>
            <button onClick={sorting}>sort</button>
            <input type='text' onChange={(val)=>{filter(val.target.value)}}/>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((ele, index) =>
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.sal}</td>
                                <td ><button onClick={() => {
                                    navigate('/update', {state:{ele:ele, index:index}})
                                }}>update</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ShowUser;