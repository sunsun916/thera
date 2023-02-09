import ProductItem from "../components/ProductItem";
import { setTheraItems } from '../assets';

function ProductList() {
  const TheraItems = setTheraItems();

  return (
    <div>
      {TheraItems.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;