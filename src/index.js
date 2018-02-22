import React from 'react';
import Home from './project/Home';
import ReactDOM from 'react-dom';
import More from './project/More';
import Basket from './project/Basket';
import './main.css';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import date from './project/date';
import reducerMore from './project/reducer/reducerSetMore';
import reducerDate from './project/reducer/reducerDate';
import reducerBasket from './project/reducer/reducerBasket';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const mainReducer = combineReducers({
    more:reducerMore,
    basket:reducerBasket,
    date:reducerDate,
});


const store = createStore(mainReducer);

store.dispatch({
    type: 'ADD_DATA',
    payload: date
});

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact render={props => <Home {...props}/>}/>
                    <Route path='/more/:id'  render={props => <More  {...props}/>}/>
                    <Route path='/basket' render={props => <Basket  {...props}/>}/>
                </Switch>
            </BrowserRouter>
        </Provider>,
     document.getElementById('root')
    );
