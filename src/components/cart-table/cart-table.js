import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { uniqBy } from 'lodash';

import './cart-table.scss';
import WithFoodService from '../hoc';
import { DeleteFromCart } from '../../actions/index';


class CartTable extends Component  {

    completeOrder (items) {

        const {FoodService} = this.props;

        FoodService.postCompleteMenuItemsApi({username: items})
            .then(result => console.log(result)
   
        ).catch(err => console.log(err));  
    }

    render () {

       const {items, DeleteFromCart} = this.props

       if (items.length < 1) {
        return (
            <div className="cart__title">
                 <Link className='back__shopping' to="/" >Back to shopping</Link>
                
            </div>
         )
       }

        return (
            <>
            <div className="cart__title">Your order:</div>
                <div className="cart__list">       
                    {  
                        uniqBy(items, o => o.id).map(item => { 
                            return (
                                <div key={item.id} className="cart__item">
                                    <img src={item.url} className="cart__item-img" alt={item.title}></img>
                                    <div className="cart__item-title">{item.title}</div>
                                    <div className="cart__item-price">
                                         <div className="cart__item-count">price {items.reduce((price, o) => price + (o.id === item.id ? item.price : 0), 0)}
                                            <div className="cart__item-count">count {items.reduce((count, o) => count + (o.id === item.id ? 1 : 0), 0)}</div>
                                        </div>
                                    </div>
                                    <div className="cart__close" onClick={() => DeleteFromCart(item.id)}>&times;</div>  
                                </div>
                            )
                        })
                    }
                    <div className='cart__title'>  total price: {this.props.priceCount}
                        <br></br>
                            <Link className='complete__link' to="/order" onClick={() => this.completeOrder(items)} > Complete</Link>
                    </div>
                </div>
            </>
        );
    }
};

const mapStateToProps = ({items, priceCount, itemsCount, countArr}) => {

    return {
        items: items,
        priceCount: items.reduce((price, item) => price + item.price, 0),
        itemsCount,
        countArr: countArr
    }    
}

const mapDispatchToProps = { 
    DeleteFromCart,
}

export default WithFoodService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));