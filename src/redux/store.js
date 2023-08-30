import rootReducer from './reducers'

import { configureStore } from '@reduxjs/toolkit'


const store = configureStore(
    {reducer:rootReducer},
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION_() );


export default store;