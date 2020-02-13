import * as Vars from '../config/constantVariables'

export default (state = { environmentObjects: [], tiles: {}, }, action) => {
    switch (action.type) {

        case 'GENERATE_MAP_TILESET': {
            console.log(action.details)
            return {
                ...state,
                tiles: {

                }
            }
        }
        case "GENERATE_OBJECT": {

            return {
                ...state,
            }
        }
        
        case 'CLEAR_OBJECT_LIST': {
            return {
                ...state,
                environmentObjects: [],
            }
        }

        default: return state
    }
}