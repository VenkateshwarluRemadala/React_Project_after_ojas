import { React, useState } from 'react';

function Student() {
    const [studentInfo, setStudentInfo] = useState({});
    const [totalStudentData, setTotalStudentData] = useState([]);
    const [openStudentform, setOpenStudentform] = useState(false);
    const [editObj, setEditObj] = useState({});
    const [editObjIndex, setEditObjIndex] = useState('');
    const [openEditObjform, setOpenEditObjForm] = useState(false);
    localStorage.setItem("studentData", JSON.stringify(totalStudentData));
    const addStudentData = () => {
        totalStudentData.push(studentInfo);
        setTotalStudentData([...totalStudentData]);
        setOpenStudentform(false)
    }
    const editObjfun = (object, index)=>{
        setEditObj(object);
        setEditObjIndex(index);
        setOpenEditObjForm(true);
    }
    const deleteObjFun = (index)=>{
        totalStudentData.splice(index,1);
        setTotalStudentData([...totalStudentData]);
    }

    const saveEditedChanges = ()=>{
        totalStudentData.splice(editObjIndex,1, editObj);
        setTotalStudentData([...totalStudentData]);
        setEditObj({});
        setOpenEditObjForm(false);
    }
    return (
        <div>
            <button onClick={() => { setOpenStudentform(true) }}>create a Student</button>
            {
                openStudentform == true ? <div>
                    <input type='text'  placeholder='Enter Name' onChange={(input) => { setStudentInfo({ ...studentInfo, ...{ "name": input.target.value } }) }} /><br></br>
                    <input type='text' placeholder='Enter class' onChange={(input) => { setStudentInfo({ ...studentInfo, ...{ "class": input.target.value } }) }} /><br></br>
                    <input type='file' placeholder='upload your photo' onChange={(input) => { setStudentInfo({ ...studentInfo, ...{ "photo": input.target.files[0] } }) }}/><br></br>
                    <input type='file' placeholder='upload your video' onChange={(input) => { setStudentInfo({ ...studentInfo, ...{ "video": input.target.files[0] } }) }} /><br></br>

                    <button onClick={addStudentData}>save</button>
                    <button onClick={() => {
                        setStudentInfo({})
                        setOpenStudentform(false)
                    }}>cancel</button>
                </div> : null
            }

            <table>
                <thead>
                    {
                        totalStudentData.length>0 ? 
                        <tr>
                            <th>name</th>
                            <th>class</th>
                            <th>photo</th>
                            <th>video</th>
                        </tr>:null
                    }
                </thead>
                <tbody>
                    {
                        totalStudentData.map((studentObject, index)=>
                        <tr key={index}>
                            <td>{studentObject.name}</td>
                            <td>{studentObject.class}</td>
                            <td><img width={"200px"} src={URL.createObjectURL(studentObject.photo)}/></td>
                            <td><video  src={URL.createObjectURL(studentObject.video)} controls width={'350px'} ></video></td>
                            <td><button onClick={()=>{editObjfun(studentObject, index)}}>Edit</button></td>
                            <td><button onClick={()=>{deleteObjFun(index)}} >delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                openEditObjform == true ? <div>
                    <input type='text' value={editObj.name} onChange={(input) => { setEditObj({ ...editObj, ...{ name: input.target.value } }) }} /><br></br>
                    <input type='text' value={editObj.class} onChange={(input) => { setEditObj({ ...editObj, ...{ class: input.target.value } }) }} /><br></br>
                    <input type='file' placeholder='upload your photo' onChange={(input) => { setEditObj({ ...editObj, ...{ "photo": input.target.files[0] } }) }}/><br></br>
                    <input type='file' placeholder='upload your video' onChange={(input) => { setEditObj({ ...editObj, ...{ "video": input.target.files[0] } }) }} /><br></br>
                    <button onClick={saveEditedChanges}>saveEditedObject</button>
                    <button onClick={() => {
                        setEditObj({})
                        setOpenEditObjForm(false)
                    }}>cancel</button>
                </div> : null
            }
        </div>
    )
}
export default Student;