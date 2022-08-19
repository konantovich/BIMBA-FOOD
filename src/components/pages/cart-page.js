import React from 'react';
import CartTable from '../cart-table';


const CartPage = ({priceCount}) => {

    return (
        <div className="cart"> 
            <CartTable priceCount={priceCount}/>
        </div>
    )
}

export default CartPage;