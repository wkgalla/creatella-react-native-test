import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import productReducer from './reducers/products'


const store = createStore(
    productReducer,
    applyMiddleware(thunkMiddleware)
  );

export default store;