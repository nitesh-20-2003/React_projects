import { useState } from "react";
import questions from "./data";
import Questions from './Questions'
const App = () => {
  const [data,setdata]=useState(questions);
    const [activeid,setactiveid]=useState(null);
    const toggleQuestion=(id)=>{
      const newactiveid=id===activeid?null:id;
    setactiveid(newactiveid);
    }
  return <main>
    <Questions data={data} activeid={activeid} toggleQuestion={toggleQuestion} />
  </main>
};
export default App;
