import {React, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

function Table(){

    const data = useSelector(data=>data.display.objects);
    return (
        <div>
            <h1>table</h1>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>name</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    
                    data.map((ele,index)=>
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.name}</td>
                            <td>{ele.name}</td>
                        </tr>
                        )
                 }
                </tbody>
            </table>
        </div>
    )
}
export default Table;