import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../reducers'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
export const store = createStore(RootReducer, applyMiddleware(thunk))
export const persistor = persistStore(store);
