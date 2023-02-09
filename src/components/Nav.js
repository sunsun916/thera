import React from 'react';
import { Link } from "react-router-dom";
import { FaSistrix } from 'react-icons/fa';
import "./nav.css"

function Nav( ) {
  return (
    <nav className='navigation'>
      <ul className='globalNav'>
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

      <ul className='registry'>
          <li>
            <Link to ="/">로그인</Link>
          </li>
          <li>
            <Link to ="/">회원가입</Link>
          </li>
          <li>
            <Link to ="/"><FaSistrix /></Link>
          </li>
      </ul>
    </nav>
  );
}

export default Nav;