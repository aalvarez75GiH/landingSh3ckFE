
// ******** configureStore function created manually ************** 
// import { applyMiddleware, compose, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension' 
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from './reducers'

// export default function configureStore(preloadedState) {
//     // middlewares configurations
//     const middlewares = [thunkMiddleware]
//     const middlewareEnhancer = applyMiddleware(...middlewares)
//     const enhancers = [middlewareEnhancer]
//     const composeEnhancers = composeWithDevTools(...enhancers)


//     const store = createStore(rootReducer, preloadedState, composeEnhancers )
    
//     if (process.env.NODE_ENV !== 'production' && module.hot) {
//         module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//     }
    
//     return store

// }

// ********** configureStore from Redux toolkit ********************

import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducers/index'

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        preloadedState
    })
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
 
    }

    return store
}

// import { createStore } from 'redux'

// export const store =  createStore(rootReducer,{})
