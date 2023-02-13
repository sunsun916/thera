import React from 'react';
import { Link } from "react-router-dom";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { addWishlist, getItemId } from '../assets';
import therabig01 from '../assets/images/therabig01.png';
import theraS01 from '../assets/images/theraS01.png'
import theraS02 from '../assets/images/theraS02.png'
import theraS03 from '../assets/images/theraS03.png'
import theraS04 from '../assets/images/theraS04.png'
import "./productPage.css";

function ProductPage( ) {

   const path = process.env.PUBLIC_URL;
 /* const path = process.env.PUBLIC_URL;
  const { itemId } = useParams(); //App.js itemId라는 것을 작성했기 때문에

  
  //클릭한 제품의 번호의 데이터만 불러오는 함수
  const item = getItemId(itemId);
  const navigate = useNavigate();

  console.log(item);
  
  if(!item) {
    return <Navigate to="/shop" />;
  }

  const handledWishlist = () => {
    //alert('저장이 완료 되었습니다');
    addWishlist(item.id); //우리가 뽑아온 객체안에서 id만을 뜻함. 이건 initlalData.json에서 가져오는게 아님 

    navigate('/cartlist');
  };
*/
  return (
    <div>
      <section className='subPage'>
        <div className="innerSub">
          {/* 상품상세보기 시작 */}
          <div id="sit-hhtml"></div>
            <div id="sit">

              <div id="sit-ov-wrap">
                <div id="pd-info">
                  <span class="ft-play">THERA Selenium</span>
                    <h3>테라 셀레늄<em>(60ml)</em></h3>
                      <div class="pd-price">
                        <strong>143,000</strong>원
                      </div>
                </div>
                <div id="sit-pvi">

                  <div id="sit-pvi-big">

                    <a className='visivle'>
                      <img src={therabig01} alt="therabig01 img"></img>
                    </a>
                    <a className>
                      <img src="" alt=""></img>
                    </a>
                    <a className>
                      <img src="" alt=""></img>
                    </a>
                    <a className>
                      <img src="" alt=""></img>
                    </a>
                    
                    <ul id="sit-pvi-thumb">
                      <li>
                        <a className='img-thumb'>
                          <img src={theraS01} alt="theraS01 img"></img>
                        </a>
                      </li>
                      <li>
                        <a className='img-thumb'>
                          <img src={theraS02} alt="theraS01 img"></img>
                        </a>
                      </li>
                      <li>
                        <a className='img-thumb'>
                          <img src={theraS03} alt="theraS01 img"></img>
                        </a>
                      </li>
                      <li>
                        <a className='img-thumb'>
                          <img src={theraS04} alt="theraS01 img"></img>
                        </a>
                      </li>
                    </ul>
                  </div>


                </div>
              </div>

            </div>
        </div>
      </section>
      {/*<section>
        <h2>상세페이지</h2>
         <h2>{item.title}</h2>
        <img src={`${path}/images/${item.imgUrl}.png`} alt={item.title} />
        <br />
        <button onClick={handledWishlist}>위시리스트 저장</button> 
      </section>*/}


    </div>
  );
}

export default ProductPage;