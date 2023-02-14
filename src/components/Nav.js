import React from 'react';
import { Link } from "react-router-dom";
// import { FaSistrix } from 'react-icons/fa';
import "./nav.css"

function Nav( ) {
  return (
    <nav>
      <ul>
          <li>
            <Link to ="/">회사소개</Link>
          </li>
          <li>
            <Link to ="/">나노제품</Link>
          </li>
          <li>
            <Link to ="/">전문의약품</Link>
          </li>
          <li>
            <Link to ="/shop">건강식품</Link>
          </li>
          <li>
            <Link to ="/">고객지원</Link>
          </li>
      </ul>
{/* 
      <div className='right'>
        <div class="mbBox">
            <Link to ="/">로그인</Link>
            <Link to ="/">회원가입</Link>
        </div>
        <button className='btnSearch'>
            <Link to ="/"><FaSistrix /></Link>
        </button>
      </div> */}
    </nav>
  );
}

export default Nav;