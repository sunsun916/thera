import { Link } from "react-router-dom";
import Nav from './Nav';
import logo from '../assets/images/logo.svg'
import "./header.css"



function Header( ) {
  return (
    <header>
      <h1>
      <Link to ="/">
        <img src={logo} alt="thera logo" />
      </Link>
      </h1>
      <div className="topbg">
        <h2>HEALTH</h2>
        <p>건강식품</p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;