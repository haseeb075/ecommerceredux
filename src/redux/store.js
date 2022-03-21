import { createStore } from "redux";
import reducers from './reducers/index';

// const store = createStore(reducers, middlewares(redux-thunk, redux-saga) , state   )I 
// I added all reducers in my store

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store; 