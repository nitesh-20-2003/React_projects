import Items from "./items";
import Btns from "./btns";
const Menu = ({ isData, categories, select }) => {
 
  return (
    <section>
      <div className="title">
        <h3>Our Menu</h3>
        <h4 className="title-underline"></h4>
      </div>
      <Btns categorie={categories}  select={select}/>
      <div className="section-center">
        {isData.map((data) => {
          return <Items key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};
export default Menu;