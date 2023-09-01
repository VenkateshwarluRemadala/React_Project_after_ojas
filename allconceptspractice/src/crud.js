import {React, createContext, useState} from 'react';
import DisplayContext from './DisplayContext';
export  const context = createContext();
function Crud(){
    const [obj, setobj] = useState({});
    const [data, setdata] = useState([]);
    const [openeditform, setopeneditform] = useState(false);
    const [editObj, seteditObj] = useState({});
    const [editobjIndex, seteditObjIndex] = useState('');
    const sumitdata = ()=>{
        data.push(obj);
        setdata([...data]);
        setobj({});
    }
    const seteditfun = (object, index)=>{
        setopeneditform(true);
        seteditObj(object);
        seteditObjIndex(index);
    }
    const updateData = ()=>{
        data.splice(editobjIndex,1,editObj);
        setdata([...data]);
        setopeneditform(false);
    }

    const getchildData = (childData)=>{
        console.log(childData, "childData");
    }
    return(
        <div>
            {/* <h1>hello</h1> */}
            <input type='text' onChange={(input)=>{setobj({...obj, ...{"name":input.target.value}})}}/>
            <input type='text' onChange={(input)=>{setobj({...obj, ...{"age":input.target.value}})}}/>
            <input type='text' onChange={(input)=>{setobj({...obj, ...{"phone":input.target.value}})}}/>
            <input type='file' onChange={(input)=>{setobj({...obj, ...{"video":input.target.files[0]}})}}/>
            <button onClick={sumitdata}>submit</button>;
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>name</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, index)=>
                        <tr>
                            <td>{ele.name}</td>
                            <td>{ele.age}</td>
                            <td>{ele.phone}</td>
                            <td><video src={URL.createObjectURL(ele.video)} controls width={'200px'}></video></td>
                            <td><button onClick={()=>{seteditfun(ele, index)}}>edit</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

            {
                openeditform == true ? <div>
                         <input type='text' value={editObj.name} onChange={(input)=>{seteditObj({...editObj, ...{name:input.target.value}})}}/>
            <input type='text' value={editObj.age} onChange={(input)=>{seteditObj({...editObj, ...{age:input.target.value}})}}/>
            <input type='text' value={editObj.phone} onChange={(input)=>{seteditObj({...editObj, ...{phone:input.target.value}})}}/>
            <button onClick={updateData}>submit</button>;
                    </div>:null
            }
    {/* <context.Provider value={[{name:"venkat", age:20, phone:9948}, {name:"vinay", age:20, phone:9948}]}>
        
    </context.Provider> */}
    {/* <DisplayContext value ={[{name:"venkat", age:20, phone:9948}, {name:"vinay", age:20, phone:9948}]} parentfun = {getchildData}/> */}
        </div>
    )
}
export default Crud;