import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Routes, Route} from 'react-router-dom';

import AppHeader from '../app-header';
import { MainPage, CartPage, OrderPage } from '../pages';
import WithFoodService from '../hoc';
import Background from './food-bg.jpg';

class App extends Component{

    render () {
        const { priceCount } = this.props;
       
        return (
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader priceCount={priceCount ?? 0}/>
                        <Routes>
                         
                            <Route path='/' element={<MainPage></MainPage>}></Route>
                            <Route path='/menu' element={<CartPage/>}></Route>
                            <Route path='/order' element={<OrderPage></OrderPage>}></Route>
                           
                        </Routes>
            </div>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        priceCount: state.items.reduce((price, item) => price + item.price, 0)
        
    }
}

export default WithFoodService()(connect(mapStateToProps)(App)); 
