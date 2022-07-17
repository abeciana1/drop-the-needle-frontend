import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: (defaultEnhancers) => [...defaultEnhancers] 
})

export default store
