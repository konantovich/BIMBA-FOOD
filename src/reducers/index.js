
const initialState = { 
    menu: [],
    loading: true,
    items: [],
    priceCount: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
            case 'MENU_LOADED':
                return { 
                    ...state, 
                    menu: action.payload,
                    loading: false, 
                }
            case 'MENU_REQUESTED':
                return { 
                    ...state, 
                    menu: state.menu,
                    loading: true,   
                }
            case 'MENU_ERROR':
                return {
                    ...state, 
                    menu: state.menu,
                    loading: false, 
                }
            
            case 'ITEM_ADD_TO_CART':
                const id = action.payload;  
                
                const item = state.menu.find(item => item.id === id);//find onClick id

                const newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,   
                    
                }
             
                return {
                    ...state,
                    items: [
                        ...state.items, 
                        newItem, 
                    ],
                };

            case 'ITEM_DELETE_TO_CART':
              
                return {
                    ...state, 
                    items: state.items.filter(o => o.id !== action.payload), 
                    
                    priceCount: state.items.reduce((price, item) => price + item.price,0)//price init = 0  
                }

            case 'CLEAR_BASKET':
                return {
                    ...state,
                    items: [],
                    priceCount: 0,
                }
        
            default: 
                return state;    
    }
} 

export default reducer;