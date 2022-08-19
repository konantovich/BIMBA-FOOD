import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //для передачи Props по App
import { BrowserRouter } from 'react-router-dom' //для SPA (переход по DOM без обновления DOM)

import store from './store'; 
import App from './components/app';
import ErrorBoundry from './components/error-boundry'; 
import FoodService from './services/food-service';
import FoodServiceContext from './components/food-service-context'; 

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')) 

const foodService = new FoodService(); 

root.render(
   
      <Provider store={store}> 
        <ErrorBoundry>
            <FoodServiceContext.Provider value={foodService}>
               <BrowserRouter>
                  <App></App>
               </BrowserRouter>
            </FoodServiceContext.Provider>
        </ErrorBoundry>
      </Provider>
);
