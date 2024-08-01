import { FaAngleDoubleRight } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid';
const Duties = ({ duties }) => {
    return (
<>
{
    duties.map((currdutie,index)=>{
        const id=uuidv4();
      
        return <div className="job-desc" key={id} >
            <FaAngleDoubleRight  className="job-icon"/>
            <span> {currdutie}</span>
        </div>
    })
}
</>
    );
};
export default Duties;
