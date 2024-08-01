import reviews from './data'
import { useState } from 'react';
import {FaChevronRight,FaChevronLeft,FaQuoteLeft} from 'react-icons/fa';
const App = () => {
  const [index,setIndex]=useState(0);
  const {name,job,image,text}=reviews[index];
  const nextperson=()=>
  {
   setIndex((currentindex)=>{
      const newindex=currentindex+1;
      return newindex==reviews.length?reviews.length-1:newindex;
   })
  }
  const prevperson=()=>{
   setIndex((currentindex)=>{
       const newindex = currentindex - 1;
       return newindex==-1?0:newindex;
   })
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevperson}>
          
            <FaChevronLeft />
          </button>
          <button type="button" className="prev-btn" onClick={nextperson}>
         
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
