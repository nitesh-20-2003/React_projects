import { useState } from "react";
import data from './data'
const App = () => {
  const [Count,setCount]=useState(1);
const [text,setText]=useState([]);
const handlesubmit=(e)=>{
  e.preventDefault();
 let amount=parseInt(Count);
 setText(data.slice(0,amount));
}
  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form  className="lorem-form" onSubmit={handlesubmit}>
        <label htmlFor="amount">paragraph</label>
        <input
         type="number" 
         name="amount" 
         id="amount" 
         min='1'
        step='1' max='8' 
        value={Count} 
        onChange={(e)=>{
          setCount(e.target.value)
        }}/>
        <button type="submit" className="btn"> Generate</button>
      </form>
      <h5 className="lorem-text">
        {text};
      </h5>
    </section>
  )
};
export default App;
