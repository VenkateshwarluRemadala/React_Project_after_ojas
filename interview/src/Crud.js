import {React, useState} from "react";
function Crud(){
    const [array, setArray] = useState([]);
    const [obj, setobj] = useState({name:"", age:"", phone:"", pan:""});
    const [objupdateIndex, setobjupInde] = useState('');
    const [selectedObj, setSelectedObj] = useState({});
    const [showForm, setShowform] = useState(false);
    const submitdata = ()=>{
        array.push(obj);
        setArray([...array])
        console.log(obj)
    };
    const getSelectedObj = (obj, index)=>{
        setShowform(true);
        setSelectedObj({...obj});
        setobjupInde(index);

    }
    const update = ()=>{
        array.splice(objupdateIndex,1,selectedObj);
        setArray([...array]);
        setShowform(false);
        console.log(selectedObj);
    };
    const deleteobj = (ind)=>{
        array.splice(ind,1);
        setArray([...array]);

    }
    return (
        <div>
            <h1>Crud</h1>
                <input  type='text' onChange={(val)=>{ setobj({...obj,...{name:val.target.value}})}}/>
                <input  type='text' onChange={(val)=>{ setobj({...obj,...{age:val.target.value}})}}/>
                <input  type='text' onChange={(val)=>{ setobj({...obj,...{phone:val.target.value}})}}/>
                <input  type='text' onChange={(val)=>{ setobj({...obj,...{pan:val.target.value}})}}/>

            <button onClick={submitdata}>postData</button>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>phone</th>
                        <th>pan</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        array.map((ele, index)=>
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.phone}</td>
                            <td>{ele.pan}</td>
                            <td><button onClick={()=>{getSelectedObj(ele,index)}}>update</button></td>
                            <td><button onClick={()=>{deleteobj(index)}}>delete</button></td>
                        </tr>
                        )
                    }

                </tbody>
            </table>

            {
                showForm == true ? 
                <div>

            <input  type='text'value={selectedObj.name}  onChange={(val)=>{ setSelectedObj({...selectedObj,...{name:val.target.value}})}}/>
            <input  type='text' value={selectedObj.age}   onChange={(val)=>{ setSelectedObj({...selectedObj,...{age:val.target.value}})}}/>
            <input  type='text' value={selectedObj.phone}   onChange={(val)=>{ setSelectedObj({...selectedObj,...{phone:val.target.value}})}}/>
            <input  type='text' value={selectedObj.pan}   onChange={(val)=>{ setSelectedObj({...selectedObj,...{pan:val.target.value}})}}/>
                <button onClick={update}>updateData</button>
                </div>:null
                

            }

        </div>
    )
}
export default Crud;