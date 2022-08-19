
const menuLoaded = (newMenu) => { 
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => { 
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => { 
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCart = (id) => { 
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const DeleteFromCart = (id) => { 
    return {
        type: 'ITEM_DELETE_TO_CART',
        payload: id
    };
};

const clearBasket = () => {
    return {
        type: 'CLEAR_BASKET'
    }
}

const completeOrder = (items) => {
    return {
        type: 'COMPLETE_ORDER'
    }
}

//будем отдельно объет экспортить с menuLoaded
export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    DeleteFromCart,
    clearBasket,
    completeOrder
};