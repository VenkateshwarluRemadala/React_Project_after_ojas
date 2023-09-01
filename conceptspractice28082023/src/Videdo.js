import {React, useState} from 'react';
function Videdo(){
    const [video, setvideo] = useState('');
    const [image, setimage] = useState('');
    
    return(
        <div>
            <input type='file' onChange={(input)=>{setimage(input.target.files[0])}}/>
            {
                image != "" ? <img width={'100px'} src={URL.createObjectURL(image)} />:null
            }
            <input type='file' onChange={(input)=>{setvideo(input.target.files[0])}}/>
            {
                video != "" ? <video controls width={'200px'} src={URL.createObjectURL(video)} ></video>:null
            }
        </div>
    )
}
export default Videdo;