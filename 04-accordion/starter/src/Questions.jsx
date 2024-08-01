 import SingleQuestion from './SingleQuestion';
 const Questions = ({ data, activeid, toggleQuestion }) => {
   return (
     <section className="container">
       <h2>Questions</h2>
       {data.map((question) => {
       
         return (
           <SingleQuestion
             key={question.id}
             {...question}
             activeid={activeid}
             toggleQuestion={toggleQuestion}
           />
         );
       })}
     </section>
   );
 };
 export default Questions;