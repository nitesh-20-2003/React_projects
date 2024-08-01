import Duties from "./duties";
const JobInfo=({jobs})=>{

return (<>
{jobs.map(({id,order,title,dates,duties,company})=>{
    return (
      <article className="job-info" key={id}>
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <Duties duties={duties} />
      </article>
    );
})}
</>)
}
export default JobInfo;