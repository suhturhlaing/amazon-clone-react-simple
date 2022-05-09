import React from 'react'
import "./Header.css"
import logo from './image/2.png';
import {Link} from "react-router-dom";
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBaskerIcon from '@mui/icons-material/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

  return (
    <nav className='header'>
        {/* logo on the left -> img */}
        <Link to= "/">
            <img className='header__logo' src={logo}></img>
        </Link>

        {/* Search box */}
        <div className='header__search'>
            <input type="text" className='header__searchInput' />
            <SearchIcon className="header_searchIcon" />
        </div>

        {/* 3 Links */}
        <div className='header__nav'>
            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__oprionLineOne'>Hello akn</span>
                    <span className='header__oprionLineTwo'>Sign In</span>
                </div>
               
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__oprionLineOne'>Return</span>
                    <span className='header__oprionLineTwo'>& Orders</span>
                </div>
               
            </Link>

            <Link to="/" className='header__link'>
                <div className='header__option'>
                    <span className='header__oprionLineOne'>Your</span>
                    <span className='header__oprionLineTwo'>Prime</span>
                </div>
               
            </Link>

            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBaskerIcon />
                    <span className='header__oprionLineTwo header__basketCount' >{basket.length}</span>
                </div>
            </Link>

        </div>

        
    </nav>
  )
}

export default Header
