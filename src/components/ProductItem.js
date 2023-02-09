import { Link } from "react-router-dom";

function ProductItem({item}) {
  const path = process.env.PUBLIC_URL;
  return (
    <div>
      <Link to={`/products/${item.id}`}>
        <h3>{item.title}</h3>
        <img src={`${path}/images/${item.imgUrl}.png`} alt={item.title} />
      </Link>
      <p>{item.des}</p>
    </div>
  );
}

export default ProductItem;