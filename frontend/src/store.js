import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'

const mainReducer = combineReducers({
    players: playersReducer,
    characters: characterReducer,
    enemies: enemiesReducer,
    npcs: npcsReducer,
})

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())