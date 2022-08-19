import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuListItem from '../menu-list-item';
import WithFoodService from '../hoc';
import {menuLoaded, menuRequested, addedToCart} from '../../actions/index';
import Spinner from '../spinner'

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {

        this.props.menuRequested();
        const {FoodService} = this.props;

            //API parsing
            //  FoodService.getMenuItems()
            //     .then(response => this.props.menuLoaded(response))
            //     .catch(error => this.props.menuError(error))

            //local parsing
            FoodService.getMenuLocal()
            .then(response => this.props.menuLoaded(JSON.parse(JSON.stringify(response.menu)))) 
            .catch(error => this.props.menuError(error)) 
        }

    render () {

        const {menuItems, loading, addedToCart} = this.props;

        if (loading) {
            return (
                <Spinner></Spinner>
            )
        }
                return (
                    <ul className="menu__list">
                        {menuItems.map(menuItem => {
                            return <MenuListItem 
                                key={menuItem.id} 
                                menu={menuItem} 
                                onAddToCard={() => addedToCart(menuItem.id)}
                                />
                        })}
                        
                    </ul>
                )     
    } 
};

const mapStateToProps = (state) => {
    return {

        menuItems: state.menu,
        loading: state.loading,

    }
}

const mapDispatchToProps = { 
        menuLoaded: menuLoaded, 
        menuRequested: menuRequested,
        addedToCart: addedToCart
}

export default WithFoodService()(connect(mapStateToProps, mapDispatchToProps)(MenuList)); 