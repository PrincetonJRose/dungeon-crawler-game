import React from 'react'
import { connect } from 'react-redux'
import PlayerMovement from './PlayerMovement'

const DrawPlayerCharacter = props =>
    <div
        style = {{
            position: 'absolute',
            top: props.position.y,
            left: props.position.x,
            background: `url(../player_walk.png) no-repeat ${props.spriteSheetX}px ${props.spriteSheetY}px`,
            width: `${props.spriteWidth}px`,
            height: `${props.spriteHeight}px`,
        }}
    />

let mapStateToProps =(state)=> {
    return {
        ...state.characters.playerCharacter
    }
}

export default connect(mapStateToProps)(PlayerMovement(DrawPlayerCharacter))