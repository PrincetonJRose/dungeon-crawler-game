import * as Vars from '../config/constantVariables'

export default (state = { currentParty: [], playerCharacter: { position: { x: 0, y: 0 }, layoutPosition: { x: 0, y: 0 }, spriteHeight: 40, spriteWidth: 40, spriteSheetX: -1, spriteSheetY: -1 }, }, action) => {
    switch (action.type) {

        case "MOVE_PLAYER":
            let x_axis = state.playerCharacter.position.x
            let y_axis = state.playerCharacter.position.y
            let x_position = state.playerCharacter.layoutPosition.x
            let y_position = state.playerCharacter.layoutPosition.y
            let spriteSheetX = state.playerCharacter.spriteSheetX
            let spriteSheetY = state.playerCharacter.spriteSheetY
            let key = action.location.keyCode
            let layout = action.location.layout
            let distance = Vars.playerSpriteSize
            
            if ( key === 37 ) {
                spriteSheetY = -81
                if (x_axis > 0 && ( layout[y_position][x_position - 1] === null || layout[y_position][x_position - 1] === 'G' ) ) {
                    x_axis -= distance
                    x_position -= 1
                }
            } else if ( key === 38 ) {
                spriteSheetY = -41
                if (y_axis > 0 && ( layout[y_position - 1][x_position] === null || layout[y_position - 1][x_position] === 'G' ) ) {
                    y_axis -= distance
                    y_position -= 1
                }
            } else if ( key === 39 ) {
                spriteSheetY = -121
                if (x_axis < Vars.maxMapWidth - distance  && ( layout[y_position][x_position + 1] === null || layout[y_position][x_position + 1] === 'G' ) ) {
                    x_axis += distance
                    x_position += 1
                }
            } else if ( key === 40 ) {
                spriteSheetY = -1
                if ( key === 40 && y_axis < Vars.maxMapHeight - distance && ( layout[y_position + 1][x_position] === null || layout[y_position + 1][x_position] === 'G' ) ) {
                    y_axis += distance
                    y_position += 1
                }
            }
            
            spriteSheetX -= 40
            if ( spriteSheetX < -290 )
                spriteSheetX = -1

            return {
                ...state,
                playerCharacter: {
                    position: {
                        x: x_axis,
                        y: y_axis,
                    },
                    layoutPosition: {
                        x: x_position,
                        y: y_position
                    },
                    spriteSheetX: spriteSheetX,
                    spriteSheetY: spriteSheetY,
                }
            }

        default: return state
    }
}
