import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
// import {reducer} from "./store";

//reducers
import {authReducer as auth} from "./store/auth/reducers";
import {friendsReducer as friends} from "./store/friends/reducers";

const rootReducer = combineReducers({auth, friends});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
