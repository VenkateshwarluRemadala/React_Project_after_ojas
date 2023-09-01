import { React, useEffect, useState } from 'react';

function Crud() {
    const [obj, setobj] = useState({ name: "", age: "", salary: "" });
    const [totalData, setTotalData] = useState([]);
    const [error, setError] = useState({ "nameE": false, "ageE": false, "salE": false });
    const [openUpdateForm, setOpenUpdateform] = useState(false);
    const [updateObj, setUpdateObj] = useState({});
    const [updateObjIndex, setUpdateObjIndex] = useState('');
    useEffect(() => {

    }, [totalData]);
    const submitData = () => {
        if (Object.values(obj).includes('')) {
            if (obj.name == "") {
                error.nameE = true
                setError({ ...error })
            } else {
                error.nameE = false;
                setError({ ...error })
            }
            if (obj.age == "") {
                error.ageE = true
                setError({ ...error })
            }
            else {
                error.ageE = false;
                setError({ ...error })
            }
            if (obj.salary == "") {
                error.salE = true
                setError({ ...error })
            }
            else {
                error.salE = false;
                setError({ ...error })
            }
        } else {
            totalData.push(obj);
            const nonDuplicateData = totalData.filter((object, index, totalArray) => index === totalArray.findIndex(ele => ele.name == object.name && ele.age == object.age && ele.salary == object.salary))
            setTotalData([...nonDuplicateData]);
            setobj({ name: "", age: "", salary: "" });
            error.nameE = false;
            error.ageE = false;
            error.salE = false;
            setError({ ...error })
        }
    }
    const updateTheData = () => {
        totalData.splice(updateObjIndex, 1, updateObj);
        setTotalData([...totalData]);
        setOpenUpdateform(false);
        setUpdateObj({});
        setUpdateObjIndex('')
    }
    return (
        <div>
            <p>crud operations</p>
            <input type='text' placeholder='Enter name' value={obj.name} onChange={(input) => { setobj({ ...obj, ...{ name: input.target.value } }) }} /><br></br>
            {
                error.nameE == true ? <p>please Enter the name</p> : null
            }
            <input type='text' placeholder='Enter age' value={obj.age} onChange={(input) => { setobj({ ...obj, ...{ age: input.target.value } }) }} /><br></br>
            {
                error.ageE == true ? <p>please Enter the age</p> : null
            }
            <input type='text' placeholder='Enter salary' value={obj.salary} onChange={(input) => { setobj({ ...obj, ...{ salary: input.target.value } }) }} /><br></br>
            {
                error.salE == true ? <p>please Enter the salary</p> : null
            }
            <button onClick={submitData}>submit</button>
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
                        totalData.map((ele, index) =>
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td>{ele.salary}</td>
                                <td><button onClick={() => {
                                    setOpenUpdateform(true)
                                    setUpdateObj(ele)
                                    setUpdateObjIndex(index)
                                }}>update</button></td>
                                <td><button onClick={() => {
                                    totalData.splice(index, 1)
                                    setTotalData([...totalData])
                                }}>delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                openUpdateForm == true ? <div>
                    <input type='text' value={updateObj.name} onChange={(input) => { setUpdateObj({ ...updateObj, ...{ name: input.target.value } }) }} /><br></br>
                    <input type='text' value={updateObj.age} onChange={(input) => { setUpdateObj({ ...updateObj, ...{ age: input.target.value } }) }} /><br></br>
                    <input type='text' value={updateObj.salary} onChange={(input) => { setUpdateObj({ ...updateObj, ...{ salary: input.target.value } }) }} /><br></br>
                    <button onClick={updateTheData}>updateObject</button>
                </div> : null
            }
        </div>
    )
}
export default Crud;