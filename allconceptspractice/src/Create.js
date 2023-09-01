import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import {setTotalData} from '../src/Actions';
function Create() {
    const [inputObj, setInputObj] = useState({});
    const [createUser, setcreateUser] = useState(false);
    const dispatch = useDispatch();
    const submitData = () => {
        dispatch(setTotalData(inputObj));
        setInputObj({});
        setcreateUser(false);  
    }

    return (
        <div>
            <button onClick={() => { setcreateUser(true) }}>createa new user</button>
            {
                createUser == true ? <div>
                    <input type='text' placeholder='enter name' onChange={(input) => { setInputObj({ ...inputObj, ...{ name: input.target.value } }) }} />
                    <input type='text' placeholder='enter age' onChange={(input) => { setInputObj({ ...inputObj, ...{ age: input.target.value } }) }} />
                    <input type='text' placeholder='enter salary' onChange={(input) => { setInputObj({ ...inputObj, ...{ sal: input.target.value } }) }} />
                    <button onClick={submitData}>submittData</button>
                </div> : null
            }
        </div>
    )
}
export default Create;