import React from 'react'
import { connect } from 'react-redux'
import PlayerMovement from './PlayerMovement'

const DrawPlayerCharacter = props =>
    <div
        style = {{
            position: 'absolute',
            top: props.position.y,
            left: props.position.x,
            backgroundImage: `url(../player_walk.png)`,
            backgroundPosition: `0 0`,
            width: `40px`,
            height: `40px`,
        }}
    />

let mapStateToProps =(state)=> {
    return {
        ...state.characters.playerCharacter
    }
}

export default connect(mapStateToProps)(PlayerMovement(DrawPlayerCharacter))