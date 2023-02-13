import { Link } from "react-router-dom";
import "../components/footer.css";
import Aside from "./Aside";

function Footer() {
  return (
    <footer id="ft">
      <div className="ft-wrap">
        <div className="fr-left">
          <h1 className="logo">
            <Link to="/">THEFAPHARMA</Link>
          </h1>
          <strong>대표전화</strong>
          <Link to="#">032.715.9402</Link>
          <ul>
            <li>
              <span>월-금요일</span>
              "09:00 - 17:30"
            </li>
            <li>
              <span>주말, 공휴일</span>
              "휴무"
            </li>
          </ul>
        </div>
        <div className="fr-center">
          <ul>
            <li>
              <span>기관명</span>(주)테라파마프로덕트
            </li>
            <li>
              <span>대표자명</span>윤현주
            </li>
            <li>
              <span>주소</span>(17371) 경기도 부천시 부흥로256 계남아카데미빌딩
              4층
            </li>
            <li>
              <span>등록번호</span>296-86-00279
            </li>
            <li>
              <span>통신판매업</span>제 2022-경기부천-0923 호
            </li>
            <li>
              <span>통신판매업</span>therapharma@daum.net
            </li>
          </ul>

          <ol>
            <li>
              <Link to="#">교환 및 반품</Link>
            </li>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
          </ol>
        </div>
        <div className="fr-right">
          <div className="family-site-wrap">
            <h3>
              <strong>THERA</strong>PGARMA PROD.
              <br />
              <b>Products</b>
            </h3>

            <dl className="family-site">
              <dt>
                <Link to="#">선택</Link>
              </dt>
              {/* <dd style="display: none"> */}
              <dd>
                <ul>
                  <li>
                    <Link to="#">테라 셀레늄</Link>
                  </li>
                  <li>
                    <Link to="#">테라 비타민C 플러스 아연</Link>
                  </li>
                  <li>
                    <Link to="#">테라 커큐베라트롤</Link>
                  </li>
                  <li>
                    <Link to="#">테라 라스베라-엑스</Link>
                  </li>
                  <li>
                    <Link to="#">테라 미슬토</Link>
                  </li>
                </ul>
              </dd>
            </dl> 

          </div>
        </div>
      </div>
      <Aside />
    </footer>
  );
}

export default Footer;
