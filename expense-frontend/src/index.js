import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'; //for store setup, use thunk or rather connect thunk
import thunk from 'redux-thunk'; //for thunk, enable async proc.
import {Provider} from 'react-redux'; //wrap app to use redux, any comp wrapped in prov will have access to redux store
 
//import './index.css';
import App from './App';

//think about things to setup in the index file:
//the redux store, thunk async requests, have app be able to access redux store via provider, 


ReactDOM.render(<App />, document.getElementById('root'));


