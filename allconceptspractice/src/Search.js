import axios from 'axios';
import { useEffect, useState } from 'react';
import {React} from 'react';

function Search(){
    const [data, setadta] = useState( []);
    const [filteredData, setFilteredData] = useState([]);
     useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((data)=>{
            // console.log(data.data.products, "venkat")
            setadta(data.data.products);
            setFilteredData(data.data.products);
        });

        
    },[]);
    const getFilter = (input)=>{
    const filtered =  data.filter((ele)=>{
            return ele.title.toLowerCase().includes(input.toLowerCase())
        });
        setFilteredData([...filtered]);

    }
    return(
        <div>
            <input type='text' onChange={(input)=>{getFilter(input.target.value)}}/>
           {
            filteredData.map((ele, index)=><p key = {index}>{ele.title}</p>)
           }
        </div>
    )
}
export default Search;