import { combineReducers } from 'redux'
import taskReducer from './tasks'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['taskReducer']
}
const RootReducer = combineReducers({
    taskReducer: taskReducer
})
export default persistReducer(persistConfig, RootReducer)