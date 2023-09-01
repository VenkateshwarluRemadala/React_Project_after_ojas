import {React} from 'react';

function Child(props){
    // console.log(props.sendName)
    // const name = "parent data, ammulu"
    // props.getChildData(name)
    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data, "venjka");
    return(
        <div>
            {/* <p>{props.sendName}</p> */}
            {
                data.map((ele, index)=><p>{ele.name
                }</p>)
            }
        </div>
    )
}
export default Child