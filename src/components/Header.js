import { Link } from "react-router-dom";
import Nav from './Nav';
import logo from '../assets/images/logo.svg'
import "./header.css"
import React, {useState, useEffect} from 'react';
import { FaSistrix } from 'react-icons/fa';
import SubBanner from "./SubBanner";

function Header( ) {

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });

  return (

    <header id="hd">
    
    {/* </header><header id="hd" className={scrollPosition < 100 ? "original_header" : "change_header"}> */}

  {/* -------header bar 색상변경 시작--------  }
  <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
        </div>
      {/* --------header bar 색상변경 끝 div--------- */} 
    
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