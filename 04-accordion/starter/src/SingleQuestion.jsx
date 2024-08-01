import { useState } from 'react';
import { AiOutlineMinus ,AiOutlinePlus } from "react-icons/ai";
const SingleQuestion =({title,info,activeid,toggleQuestion,id})=>{
 const [showinfo,setshowinfo]=useState(false);
 const isactiveid=id===activeid
 return <article className='question'>
    <header>
        <h5>{title}</h5>
        <button  className='question-btn' onClick={()=>{ toggleQuestion(id)}}> {isactiveid?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
   { isactiveid && <p>{info} </p>}
 </article>
}
export default SingleQuestion;