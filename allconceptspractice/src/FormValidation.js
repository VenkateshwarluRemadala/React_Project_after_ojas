import axios from 'axios';
import{React, useEffect, useState} from 'react';

function FormValidation(){
    const [obj, setObj] = useState({name:"", age:""});
    const [islogged, setIsLogged] = useState(false);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [log, setlog] = useState();
    const [data, setdata] = useState([]);
    const users = [
        {
            name:"venkat",
            password:"123"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        },
        {
            name:"vinay",
            password:"456"
        }
    ];
console.log(users.length,"   ",Math.ceil(users.length/3));
    // useEffect(()=>{

    //     axios.get("https://dummyjson.com/products").then(data=>console.log(data.data.products))
    // },[])

    const submitdata = ()=>{
       
        // event.preventDefault();
        // data.push(obj);
        // setdata([...data]);
        // setObj({name:"", age:""})
        if(obj.name == ""){
            setIsNameValid(true);
        }else{
            setIsNameValid(false)
        }
        if(obj.age == ''){
            setIsPasswordValid(true)
        }else{
            setIsPasswordValid(false);
        }
        if(obj.name.length>0 && obj.age.length>0){
            data.push(obj);
            setdata([...data]);
            setObj({name:"", age:""});
            console.log(isNameValid,isPasswordValid);
        }
        // setObj({})
        // console.log(obj);
        // users.find((ele)=>{
        //     if(ele.name == obj.name && ele.password == obj.password){
        //         setlog(true);
        //     }else{
        //         setIsLogged(false)
        //     }
        // })
        
        // for(let i of users){
        //     if(i.name == obj.name){
        //         setIsNameValid(false);
        //         break;
        //     }else{
        //         setIsNameValid(true)
        //     }
        // }
        // for(let i of users){
        //     if(i.password == obj.password){
        //         setIsPasswordValid(false);
        //         break;
        //     }else{
        //         setIsPasswordValid(true)
        //     }
        // }

    }
    return(
        <div>
            <p>form validations</p>
           <div>
           <input type='text'  value={obj.name} onChange={(input)=>{setObj({...obj, ...{name:input.target.value}})}}/>
            {
                isNameValid == true ? <p>Please enter correct name</p>:null
            }
           </div>
            <div>
            <input type='text' value={obj.age} onChange={(input)=>{setObj({...obj, ...{age:input.target.value}})}}/>
            {
                isPasswordValid == true ? <p>Please enter correct password</p>:null
            }
            </div>
            <button onClick={submitdata}>submitt</button>
            {/* {
                log ? <p>Logged in succesfully</p>:null
            }
                        {
                isNameValid == true ? <p>name is not vallid</p>:null
            }
            {
                isPasswordValid == true? <p>password is not vallid</p>:null
            }
            <p>dasdsafsa</p> */}
            
            {
                data.map((ele, index)=>
                <div key={index}>
                    <p>{ele.name}</p>
                    <p>{ele.age}</p>
                </div>
                )
            }
        </div>
    )
}
export default FormValidation;