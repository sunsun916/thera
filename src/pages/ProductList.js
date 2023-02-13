import ProductItem from "../components/ProductItem";
import { setTheraItems } from '../assets';
import "./productList.css";

function ProductList() {
  const TheraItems = setTheraItems();

  return (

    <section className="subPage">
      <div className="inner">
          <div id="sct">
              <div className="sct-hhtml"></div>
              
              <div className="mapBox">
                  {TheraItems.map((item) => (
                    <ProductItem key={item.id} item={item} />
                  ))}  
              </div>
          </div>
        </div>
    </section>
  );
}

export default ProductList;