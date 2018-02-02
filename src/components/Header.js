//header
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return(
      <div className="Header">
        <header>
          <div className='logo'>Narflix</div>
          <div id="link1"><Link to='/'>Home</Link></div>
          <div id="link2"><Link to='/my-favorites'>Watch List</Link></div>
          <div id="link3"><Link to='/login'>Login</Link></div>
          <div id="link4"><Link to='/register'>Sign Up</Link></div>
        </header>
      </div>
    )
}





export default Header;
