import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; //for store setup, use thunk or rather connect thunk, compose chain together diff functions combines middlewares into one
//last lab for async react doesn't use compose

import thunk from 'redux-thunk'; //for thunk, enable async proc.
import {Provider} from 'react-redux'; //wrap app to use redux, any comp wrapped in prov will have access to redux store
import {BrowserRouter as Router} from 'react-router-dom'; //imports and allows use of Router, can be just set with BrowserRouter, but allows keyword Router to be used instead here, react-router-dom allows some additional tags
import accountReducer from './reducers/accountReducer'
//import './index.css';
import App from './App';

//think about things to setup in the index file:
//the redux store, thunk async requests, have app be able to access redux store via provider, 

//store setup
//reducer not build yet, but this is the setup, second param of createStore: are dev tools, other options exist besides thunk(i.e one called epicMiddleware)
//this gives option to use the standard or switch to compose if not avail
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))
//store is where storing data, reducers say what you want to do to the data based on certain conditions/changes, dispatching actions to that reducer
//reducer is what you want to update about the current store, reducer will then return a new version of that store

//add Provider around app = Any child component of App will have access to the store that is passed into the Provider
//store is passed into provider as a prop, must be store={storeName}
//below, wrapping Router allows any app and child of app access to setting up Routes and using Links
//can also just set up within App
ReactDOM.render(

<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));


