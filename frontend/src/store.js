import { createStore, combineReducers } from 'redux'
import playersReducer from './reducers/playersReducer'
import charactersReducer from './reducers/charactersReducer'
import enemiesReducer from './reducers/enemiesReducer'
import npcsReducer from './reducers/npcsReducer'
import environmentReducer from './reducers/environmentReducer'

const mainReducer = combineReducers({
    players: playersReducer,
    characters: charactersReducer,
    enemies: enemiesReducer,
    npcs: npcsReducer,
    environment: environmentReducer,
})

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())