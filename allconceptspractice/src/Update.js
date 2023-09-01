import { React, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateObject } from '../src/Actions';
import { useDispatch } from 'react-redux';
function Update() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [updatedObject, setUpdatedObject] = useState({});
    const [isupdate, setupdate] = useState(false);
    useEffect(() => {
            if(location.state != undefined){
                setUpdatedObject(location.state.ele);
                setupdate(true);
            }
        
    }, []);
    return (
        <div>
            
            {
                isupdate == true? <div>
                    <p>update you object</p>
                    <input type='text' value={updatedObject.name} onChange={(input) => { setUpdatedObject({ ...updatedObject, ...{ name: input.target.value } }) }} />
                    <input type='text' value={updatedObject.age} onChange={(input) => { setUpdatedObject({ ...updatedObject, ...{ age: input.target.value } }) }} />
                    <input type='text' value={updatedObject.sal} onChange={(input) => { setUpdatedObject({ ...updatedObject, ...{ sal: input.target.value } }) }} />
                    <button onClick={() => {
                dispatch(updateObject({ updatedObject: updatedObject, index: location.state.index }));
                navigate('/home');
                setupdate(false);
            }}>updateObject</button>
                </div>: "There is no data uvailable to update"
            }
            
        </div>
    )
}
export default Update;