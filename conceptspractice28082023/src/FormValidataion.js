import { React, useState, useEffect } from 'react';

function FormValidataion() {
    const [obj, setobj] = useState({ name: "", age: "", salary: "" });
    const [totalData, setTotalData] = useState([]);
    const [error, setError] = useState({ "nameE": false, "ageE": false, "salE": false })
    useEffect(() => {
    }, [totalData, error]);
    const submitData = () => {
        if (Object.values(obj).includes('')) {
            if (obj.name == "") {
                error.nameE = true
                setError({ ...error })
            }else{
                error.nameE = false;
                setError({ ...error })
            }
            if (obj.age == "") {
                error.ageE = true
                setError({ ...error })
            }
            else{
                error.ageE = false;
                setError({ ...error })
            }
            if (obj.salary == "") {
                error.salE = true
                setError({ ...error })
            }
            else{
                error.salE = false;
                setError({ ...error })
            }
        } else {
            console.log(totalData, obj);
            totalData.push(obj);
            setTotalData([...totalData]);
            setobj({ name: "", age: "", salary: "" });
            error.nameE = false;
            error.ageE = false;
            error.salE = false;
            setError({ ...error })
        }
    }
    return (
        <div>
            <input type='text' value={obj.name} onChange={(input) => { setobj({ ...obj, ...{ name: input.target.value } }) }} /><br></br>
            {
                error.nameE == true ? <p>please Enter the name</p> : null
            }
            <input type='text' value={obj.age} onChange={(input) => { setobj({ ...obj, ...{ age: input.target.value } }) }} /><br></br>
            {
                error.ageE == true ? <p>please Enter the age</p> : null
            }
            <input type='text' value={obj.salary} onChange={(input) => { setobj({ ...obj, ...{ salary: input.target.value } }) }} /><br></br>
            {
                error.salE == true ? <p>please Enter the salary</p> : null
            }
            <button onClick={submitData}>submit</button>


        </div>
    )
}
export default FormValidataion;