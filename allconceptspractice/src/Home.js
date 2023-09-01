import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Create from './Create';
import ShowUser from './ShowUser';
import Delete from './Delete';
import Update from './Update';
import GetPreviousState from './GetPreviousState';

function Home(){
    const navigate = useNavigate();
    const [displayCreate, setDisplayCreate] = useState(false);
    const [displayGetAll, setDisplayGetAll] = useState(false);
    const [displayUpdate, setDisplayUpdate] = useState(false);
    const [displayDelete, setDisplayDelete] = useState(false);
    const [displayprevious, setdisplayprevious] = useState(false);

    const displayCreateComp = ()=>{
        setDisplayGetAll(false);
        setDisplayUpdate(false);
        setDisplayDelete(false);
        setDisplayCreate(true);
        setdisplayprevious(false);
    }
    const displayGetAllComp = ()=>{
        setDisplayGetAll(true);
        setDisplayUpdate(false);
        setDisplayDelete(false);
        setDisplayCreate(false);
        setdisplayprevious(false);
    }
    const displayUpdateComp = ()=>{
        setDisplayGetAll(false);
        setDisplayUpdate(true);
        setDisplayDelete(false);
        setDisplayCreate(false);
        setdisplayprevious(false);
    }
    const displayDeleteComp = ()=>{
        setDisplayGetAll(false);
        setDisplayUpdate(false);
        setDisplayDelete(true);
        setDisplayCreate(false);
        setdisplayprevious(false);
    }
    const displayPreviousStateComp = ()=>{
        setDisplayGetAll(false);
        setDisplayUpdate(false);
        setDisplayDelete(false);
        setDisplayCreate(false);
        setdisplayprevious(true);

    }
    return(
        <div>
            <button onClick={displayCreateComp}>create</button>
            <button onClick={displayGetAllComp}>getAll</button>
            <button onClick={displayUpdateComp}>update</button>
            <button onClick={displayDeleteComp}>all concepts</button>
            <button onClick={displayPreviousStateComp}>previousState</button>
            <button onClick={()=>{navigate('/')}}>Logout</button>
            {
                displayCreate == true ? <Create/> :null
            }
        
            {
                displayUpdate == true ? <Update/> :null
            }
              {
                displayDelete == true ? <Delete/> :null
            }
              {
                displayGetAll == true ? <ShowUser/> :null
            }
            {
                displayprevious == true ? <GetPreviousState/> :null
            }
        </div>
    )
}
export default Home;