import { createStore, combineReducers } from 'redux'
import playersReducer from './reducers/userReducer'
import charactersReducer from './reducers/charactersReducer'
import enemiesReducer from './reducers/enemiesReducer'
import npcsReducer from './reducers/npcsReducer'

const mainReducer = combineReducers({
    players: playersReducer,
    characters: charactersReducer,
    enemies: enemiesReducer,
    npcs: npcsReducer,
})

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())