import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearBasket } from '../../actions'

const OrderPage = ({clearBasket}) => {

    return (
        <div className="cart"> 
            <div className='cart__title text-dark'>
                Thanks! We will call you!
               <br></br> (data added to backend)
            </div>
            <div className='cart__title'>
                <Link className='go__main' to='/' onClick={() => clearBasket()}>
                    Go main page
                </Link>
              
            </div>
            
        </div>
    )
}

const mapDispatchToProps = {
    clearBasket
}

export default connect(null, mapDispatchToProps)(OrderPage);