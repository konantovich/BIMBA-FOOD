import React from 'react';
import {Link} from 'react-router-dom';

import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';


const AppHeader = ({priceCount}) => {

    return (
        <header className="header">
            <Link className="header__link" to="/">
                Menu
            </Link>
            <Link className="header__link" to="/">
                {/* <img className="header__cart" src={cartIcon} alt="menu"></img> */}
                Total: {priceCount} $
            </Link>
            {priceCount > 1 ? <Link className='header__link' to="/menu">Order</Link>: <></>}
            
        </header>
    )
}

export default AppHeader;