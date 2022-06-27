// import { createStore, applyMiddleware, compose, CombinedState } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const composeEnhancer = compose<any>(
//     composeWithDevTools(applyMiddleware(thunk))
// )

// const reducer = rootReducer

    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

// export const store = (context: any) => createStore(
//     rootReducer,
//     composeEnhancer
// )
// import { createWrapper } from 'next-redux-wrapper'
// interface State {
//   tick: string;
// }
// const wrapper = createWrapper<Store<State>>(store, {debug: false})
// export default wrapper


import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: (defaultEnhancers) => [...defaultEnhancers] 
})

export default store
