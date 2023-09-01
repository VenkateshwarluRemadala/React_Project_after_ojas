import {React, useState} from 'react';

function Books(){
    const [bookInfo, setBookInfo] = useState({});
    const [totalBookData, setTotalBookData] = useState([]);
    const [openBookform, setOpenBookform] = useState(false);
    const [editBookObj, setEditBookObj] = useState({});
    const [editBookObjIndex, setEditBookObjIndex] = useState('');
    const [openEditBookObjform, setOpenEditBookObjForm] = useState(false);
  
    localStorage.setItem("bookData", JSON.stringify(totalBookData));
const getYear = (val)=>{
    console.log(val, "year");
    val = val.split('-');
    setBookInfo({...bookInfo, ...{year:val[0]}});

}

    const addBookData = () => {
        totalBookData.push(bookInfo);
        setTotalBookData([...totalBookData]);
        setOpenBookform(false);
    }

    const editObjBookfun = (object, index)=>{
        setEditBookObj(object);
        setEditBookObjIndex(index);
        setOpenEditBookObjForm(true);
    }
    const getYear1 = (val)=>{
        console.log(val, "year");
        val = val.split('-');
        setEditBookObj({...editBookObj, ...{year:val[0]}});
    
    }
    const deleteObjBookFun = (index)=>{
        totalBookData.splice(index,1);
        setTotalBookData([...totalBookData]);
    }

    const saveEditedBookChanges = ()=>{
        totalBookData.splice(editBookObjIndex,1, editBookObj);
        setTotalBookData([...totalBookData]);
        setEditBookObj({});
        setOpenEditBookObjForm(false);
    }


    return (
        <div>
            <button onClick={() => { setOpenBookform(true) }}>create a Book Data</button>
            {
                openBookform == true ? <div>
                    <input type='text' placeholder='enter your bookName' onChange={(input) => { setBookInfo({ ...bookInfo, ...{ bookName: input.target.value } }) }} /><br></br>
                    <input type='text' placeholder='enter your author' onChange={(input) => { setBookInfo({ ...bookInfo, ...{ author: input.target.value } }) }} /><br></br>
                    <input type='text' placeholder='enter your publication'  onChange={(input) => { setBookInfo({ ...bookInfo, ...{ publication: input.target.value } }) }}/><br></br>
                    <input type='date' placeholder='enter the year' onChange={(input)=>{getYear(input.target.value)}}/><br></br>
                    <button onClick={addBookData}>save</button>
                    <button onClick={() => {
                        setBookInfo({})
                        setOpenBookform(false)
                    }}>cancel</button>
                </div> : null
            }

            <table>
                <thead>
                    {
                        totalBookData.length>0 ? 
                        <tr>
                            <th>bookName</th>
                            <th>Author</th>
                            <th>publication</th>
                            <th>year</th>
                        </tr>:null
                    }
                </thead>
                <tbody>
                    {
                        totalBookData.map((bookObject, index)=>
                        <tr key={index}>
                            <td>{bookObject.bookName}</td>
                            <td>{bookObject.author}</td>
                            <td>{bookObject.publication}</td>
                            <td>{bookObject.year}</td>
                            <td><button onClick={()=>{editObjBookfun(bookObject, index)}}>Edit</button></td>
                            <td><button onClick={()=>{deleteObjBookFun(index)}} >delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                openEditBookObjform == true ? <div>
                    <input type='text'  value={editBookObj.bookName} onChange={(input) => { setEditBookObj({ ...editBookObj, ...{ bookName: input.target.value } }) }} /><br></br>
                    <input type='text'  value={editBookObj.author} onChange={(input) => { setEditBookObj({ ...editBookObj, ...{ author: input.target.value } }) }} /><br></br>
                    <input type='text' value={editBookObj.publication} onChange={(input) => { setEditBookObj({ ...editBookObj, ...{ publication: input.target.value } }) }}/><br></br>
                    <input type='date'   onChange={(input)=>{getYear1(input.target.value)}}/><br></br>

                    <button onClick={saveEditedBookChanges}>saveEditedObject</button>
                    <button onClick={() => {
                        setEditBookObj({})
                        setOpenEditBookObjForm(false)
                    }}>cancel</button>
                </div> : null
            }
        </div>
    )
}
export default Books;