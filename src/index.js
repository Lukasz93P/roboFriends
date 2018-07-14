import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "tachyons";
import App from "./App"
import {Provider} from "react-redux"
import {createStore, applyMiddleware,combineReducers} from 'redux'
import { searchRobots,loginUser } from './reducers';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import { BrowserRouter} from 'react-router-dom'

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,form:formReducer,login:loginUser })
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));
registerServiceWorker();
