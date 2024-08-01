import { useEffect, useState } from "react";
import JobInfo from "./Jobinfo";
const url = 'https://www.course-api.com/react-tabs-project';
import BtnContainer from "./BtnContainer";
const App = () => {
  const [isLoading,setisLoading]=useState(true);
  const [jobs,setJobs]=useState([]);
  const [curritem,setcurritem]=useState(0);
  // current item
  const fetchJobs=async()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setisLoading(false);
  }
  useEffect(()=>{
    fetchJobs();
  },[])
  if(isLoading)
  { 
    return <section className="jobs-center">
<div className="loading"></div>
   </section>
   }
  

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} />
      <JobInfo jobs={jobs} curritem={curritem} />
    </section>
  );
};
export default App;
