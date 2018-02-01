//header
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return(
      <div className="Header">
              <header>
                <div className='logo'>Narflix</div>
                <nav>
                  <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Sign Up</Link></li>
                  </ul>
                </nav>
            </header>
      </div>
    )
}





export default Header;
