import data from './data';
import { useState } from 'react';
const App = () => {
    const [person,editperson]=useState(data);
    const handlebtn=()=>
      {
      editperson({})
    }
  return (
    <div>
      {data.map(({id,name,age,image})=>
      {
       return (
         < >
           <h2>{name}</h2>
           <h4>{age}</h4>
         </>
       );

      })}
      <button type="button" className='btn' onClick={handlebtn}>click me</button>
    </div>
  );
};
export default App;
