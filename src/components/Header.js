import { Link } from "react-router-dom";
import Nav from './Nav';
import logo from '../assets/images/logo.svg'
import "./header.css"
import { FaSistrix } from 'react-icons/fa';
import SubBanner from "./SubBanner";

function Header( ) {
  return (
    <header id="hd">
      
      <div className="headerWrap">
        <div className="left">
            <h1 className="logo">
            <Link to ="/">
              <img src={logo} alt="thera logo" />
            </Link>
            </h1>

            <Nav />

        </div>
        
       <div className="right">
          <div className="mbBox">
            <Link to ="/">로그인</Link>
            <Link to ="/">회원가입</Link>
          </div>
          <button className='btnSearch'>
            <Link to ="/"></Link>
            {/* <FaSistrix /> */}
          </button>
          
       </div>
   
    </div>   
    </header>
  );
}

export default Header;