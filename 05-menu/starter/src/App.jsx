import { useState } from "react";
import data from "./data";

import Menu from "./Menu";
const tempcategorie=data.map((item)=>{
  return item.category;
})

const tempSet=new Set(tempcategorie);
const tempItems=['all',...tempSet];

const App = () => {
  const [isData,setisData]=useState(data);
  const [categories,setcategory]=useState(tempItems);
  const select=(catego)=>
    {
      if(catego.item==='all')    setisData(data);
      const filtered_data = data.filter(({ category }) => category === catego.item);
      console.log(filtered_data)
      setisData(filtered_data);
  }
  
  return (
    <main>
      <Menu isData={isData} categories={categories}  select={select}/>
    </main>
  );
};
export default App;
