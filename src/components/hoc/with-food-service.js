import React from 'react';
import FoodServiceContext from '../food-service-context';

const WithFoodService = () => (AnyComponent) => {
    
    return (props) => { 
        return (
            <FoodServiceContext.Consumer> 
                {
                    (FoodService) => {
            
                        return <AnyComponent {...props} FoodService={FoodService}></AnyComponent>
                    }
                }
            </FoodServiceContext.Consumer>
        )
    }
};

export default WithFoodService;

