import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>

            <Link to='/'>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input class="header__search" type="text" />
                { /* Logo */}
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__india">
                <img className="india__logo"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email.split('@')[0]}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div class="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo"> Orders</span>
                </div>


                <div class="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span class="header__optionLineTwo header__basketCount">
                            {basket?.length}</span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header