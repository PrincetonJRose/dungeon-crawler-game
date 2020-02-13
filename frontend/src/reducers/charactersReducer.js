import * as Vars from '../config/constantVariables'

export default (state = { currentParty: [], playerCharacter: { position: { x: 0, y: 0 }, }, }, action) => {
    switch (action.type) {
        case "MOVE_PLAYER": {
            let x_axis = state.playerCharacter.position.x
            let y_axis = state.playerCharacter.position.y
            let key = action.direction
            let distance = Vars.playerSpriteSize
            if ( key === 37 && x_axis > 0 )
                x_axis -= distance
            else if ( key === 38 && y_axis > 0 )
                y_axis -= distance
            else if ( key === 39 && x_axis < Vars.maxWidth - distance )
                x_axis += distance
            else if ( key === 40 && y_axis < Vars.maxHeight - distance )
                y_axis += distance
            return {
                ...state,
                playerCharacter: {
                    position: {
                        x: x_axis,
                        y: y_axis,
                    }
                }
            }
        }
        default: return state
    }
}
