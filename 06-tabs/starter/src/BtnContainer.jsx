const BtnContainer=({jobs})=>{
   
    return <div className="btn-container">
       {jobs.map((item)=>{
        return (
            <button type="button" className="job-btn" key={item.id}>
                {item.company}
            </button>
        )
       })}
    </div>
}
export default BtnContainer;