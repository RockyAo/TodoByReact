import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { combineReducers,createStore,applyMiddleware} from 'redux';
import reducers from './Reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const combineReducer = combineReducers(reducers);
const store = createStoreWithMiddleware(combineReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
