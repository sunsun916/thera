import { Link } from "react-router-dom";
import "../components/productItem.css";

function ProductItem({item}) {
  const path = process.env.PUBLIC_URL;
  return (

    <ul className="sct sct5 lists-row">
      <li className="sct-li">
       
          <div className="sctImg">

            {/* <div className="imgBox"> */}
                <Link to={`/products/${item.id}`}>
                  <img src={`${path}/images/${item.imgUrl}.png`} alt={item.title} />
           
                  <div className="sct-ct-wrap">
                    <h3>{item.title}</h3>
                    <span className="play">{item.des}</span>
                  </div>
                </Link>
              {/* </div> */}
            </div>
      </li>
    </ul>
       
     
  
  );
}

export default ProductItem;