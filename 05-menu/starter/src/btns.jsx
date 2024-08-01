const Btns = ({ categorie, select }) => {
  return (
    <div className="btn-container">
      {categorie.map((item) => {
        return (
          <button type="button" className="btn" key={item} onClick={()=>select({item})}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Btns;