import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

function SubPage() {
  return (
    <div>
    <section className="subPage">

    <ProductItem />
    <ProductList />
      </section>
    </div>
  );
}

export default SubPage;