import { React, useEffect, useState } from 'react';

function BookAndStudent() {
    const [totalBookAndStudentData, setTotalBookAndStudentData] = useState([]);
    const [bookAndStudentObj, setBookAndStudentObj] = useState({});
    const [bookData, setBookData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const [openStudentAndBookForm, setOpenStudentAndBookForm] = useState(false);
    const [openEditStudentAndBookForm, setOpenEditStudentAndBookForm] = useState(false);
    const [editBookAndStudentObj, setEditBookAndStudentObj] = useState({});
    const [editBookAndStudentObjIndex, setEditBookAndStudentObjIndex] = useState('');
    useEffect(() => {
        const studentDat = JSON.parse(localStorage.getItem('studentData'));
        const bookDat = JSON.parse(localStorage.getItem('bookData'));
        setStudentData(studentDat);
        setBookData(bookDat);
        console.log(studentData, "student");
        console.log(bookData, "book");

    }, []);
    const getSelectedStudentDropDownValue = (val) => {
        console.log(val, "dropdown")
        if (val != '') {
            setBookAndStudentObj({ ...bookAndStudentObj, ...{ studentName: val } });
        }
    }
    const getSelectedBookDropDownValue = (val) => {
        console.log(val, "book dropdown")
        if (val != '') {
            setBookAndStudentObj({ ...bookAndStudentObj, ...{ bookName: val } });
        }
    }

    const startDate = (val)=>{
        setBookAndStudentObj({...bookAndStudentObj, ...{startDat:val}}); 
    }
    const endDate = (val)=>{
        setBookAndStudentObj({...bookAndStudentObj, ...{endDat:val}}); 
    }
    const startDate1 = (val)=>{
        setEditBookAndStudentObj({...editBookAndStudentObj, ...{startDat:val}}); 
    }
    const endDate1 = (val)=>{
        setEditBookAndStudentObj({...editBookAndStudentObj, ...{endDat:val}}); 
    }

    const getSelectedStudentDropDownValue1 = (val) => {
        console.log(val, "dropdown")
        if (val != '') {
            setEditBookAndStudentObj({ ...editBookAndStudentObj, ...{ studentName: val } });
        }
    }
    const getSelectedBookDropDownValue1 = (val) => {
        console.log(val, "book dropdown")
        if (val != '') {
            setEditBookAndStudentObj({ ...editBookAndStudentObj, ...{ bookName: val } });
        }
    }

    const saveStudentAndBookFun = () => {
        totalBookAndStudentData.push(bookAndStudentObj);
        setTotalBookAndStudentData([...totalBookAndStudentData]);
        setBookAndStudentObj({});
        setOpenStudentAndBookForm(false);
    }

    const editObjBookAndStudenfun = (object, index)=>{
        setOpenEditStudentAndBookForm(true);
        setEditBookAndStudentObj(object);
        setEditBookAndStudentObjIndex(index);
    }

    const saveChanges = ()=>{
        totalBookAndStudentData.splice(editBookAndStudentObjIndex, 1, editBookAndStudentObj);
        setTotalBookAndStudentData([...totalBookAndStudentData]);
        setOpenEditStudentAndBookForm(false)
    }
    const deleteObjBookAndStudentFun = (index)=>{
        totalBookAndStudentData.splice(index,1);
        setTotalBookAndStudentData([...totalBookAndStudentData]);

    }

    return (
        <div>
            <button onClick={() => {
                setOpenStudentAndBookForm(true)
            }}>createStudentAndBookObject</button>
           {
            openStudentAndBookForm == true ? 
            <div>
                 <select onChange={(data) => { getSelectedStudentDropDownValue(data.target.value) }}>
                <option value={""}>---select--</option>
                {
                    studentData.map((studentObj, index) =>
                        <option key={index} value={studentObj.name}>
                            {studentObj.name}
                        </option>
                    )
                }
            </select>
            <select onChange={(data) => { getSelectedBookDropDownValue(data.target.value) }}>
                <option value={""}>---select--</option>
                {
                    bookData.map((bookObj, index) =>
                        <option key={index} value={bookObj.bookName}>
                            {bookObj.bookName}
                        </option>
                    )
                }
            </select>
            <input type='date' onChange={(input)=>{startDate(input.target.value)}}/>
            <input type='date' onChange={(input)=>{endDate(input.target.value)}}/>
            <div>
            <button onClick={saveStudentAndBookFun}>save</button>
            <button onClick={() => {
                setBookAndStudentObj({});
                setOpenStudentAndBookForm(false);
            }}>cancel</button>
            </div>
            </div>:null
           }
<table>
                <thead>
                    {
                        totalBookAndStudentData.length>0 ? 
                        <tr>
                            <th>studentName</th>
                            <th>bookName</th>
                            <th>startDate</th>
                            <th>endDate</th>
                        </tr>:null
                    }
                </thead>
                <tbody>
                    {
                        totalBookAndStudentData.map((bookAndStudentObject, index)=>
                        <tr key={index}>
                            <td>{bookAndStudentObject.studentName}</td>
                            <td>{bookAndStudentObject.bookName}</td>
                            <td>{bookAndStudentObject.startDat}</td>
                            <td>{bookAndStudentObject.endDat}</td>
                            <td><button onClick={()=>{editObjBookAndStudenfun(bookAndStudentObject, index)}}>Edit</button></td>
                            <td><button onClick={()=>{deleteObjBookAndStudentFun(index)}} >delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

            {
                openEditStudentAndBookForm == true ?
                <div>
                 <select onChange={(data) => { getSelectedStudentDropDownValue1(data.target.value) }}>
                <option value={""}>---select--</option>
                {
                    studentData.map((studentObj, index) =>
                        <option key={index} value={studentObj.name}>
                            {studentObj.name}
                        </option>
                    )
                }
            </select>
            <select onChange={(data) => { getSelectedBookDropDownValue1(data.target.value) }}>
                <option value={""}>---select--</option>
                {
                    bookData.map((bookObj, index) =>
                        <option key={index} value={bookObj.bookName}>
                            {bookObj.bookName}
                        </option>
                    )
                }
            </select>
            <input type='date' onChange={(input)=>{startDate1(input.target.value)}}/>
            <input type='date' onChange={(input)=>{endDate1(input.target.value)}}/>
            <div>
            <button onClick={saveChanges}>save</button>
            <button onClick={() => {
                setBookAndStudentObj({});
                setOpenStudentAndBookForm(false);
            }}>cancel</button>
            </div>
            </div>:null


            }
        </div>
    )
}
export default BookAndStudent;