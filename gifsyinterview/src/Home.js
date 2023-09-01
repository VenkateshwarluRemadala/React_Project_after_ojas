import {Recat, useState} from 'react';
import Books from './Books';
import Student from './Student';
import BookAndStudent from './BookAndStudent';

function Home(){
    const[openStudentComp, setOpenStudentComp] = useState(false);
    const [openBookComp, setOpenBoonComp] = useState(false);
    const [openBookAndStudentComp, setOpenBookAndStudentComp] = useState(false);

const openStudentCompfun = ()=>{
    setOpenBoonComp(false);
    setOpenBookAndStudentComp(false);
    setOpenStudentComp(true);
  

}
const openBookCompfun = ()=>{
    setOpenStudentComp(false);
    setOpenBookAndStudentComp(false);
    setOpenBoonComp(true);
}
const openBookAndStudentCompfun = ()=>{
    setOpenStudentComp(false);
    setOpenBoonComp(false);
    setOpenBookAndStudentComp(true);
}

    return(
        <div>
             <button onClick={openStudentCompfun}>openStudentComp</button>
            <button onClick={openBookCompfun}>openBookComp</button>
            <button onClick={openBookAndStudentCompfun}>openBookAndStudentComp</button>
            {
                openBookComp == true ? <Books/>:null
            }
            {
                openStudentComp == true ? <Student/>:null
            }
            {
                openBookAndStudentComp == true ? <BookAndStudent/>:null
            }
        </div>
    )
}
export default Home;