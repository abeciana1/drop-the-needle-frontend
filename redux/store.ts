import { createStore, applyMiddleware, compose } from 'redux'
// import rootReducer from '../redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'
import thunk from 'redux-thunk'

const composeEnhancer = compose<any>(
    composeWithDevTools(applyMiddleware(thunk))
)


    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export const store = (context: any) => createStore(
    // rootReducer,
    composeEnhancer
)

export const wrapper = createWrapper(store)