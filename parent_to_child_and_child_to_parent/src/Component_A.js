import {React} from 'react';
import Component_B from './Component_B';

function Component_A(){
    let arr = [
        1,2,3,4,5
    ];
    const getChildValue = (value)=>{
        console.log(value, "child value");

    }
    return (
        <div>
            <h1>Component_A</h1>
            <Component_B val = {arr} func = {getChildValue} />
        </div>
    )
}
export default Component_A;