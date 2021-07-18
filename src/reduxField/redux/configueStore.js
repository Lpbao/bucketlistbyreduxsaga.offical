import {createStore , compose , applyMiddleware} from 'redux'
import myReducer from '../reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from  '../../saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = 
    process.env.NODE_ENV !== 'production' && typeof window == "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            shouldHotReload: false,
        }) : compose
const configureStore = () => {
    const middlewares = [thunk , sagaMiddleware]
    const enhancers = [applyMiddleware(...middlewares)]
    const store = createStore(myReducer , composeEnhancer(...enhancers))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore