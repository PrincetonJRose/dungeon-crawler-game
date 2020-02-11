import React from 'react'
import { connect } from 'react-redux'

const DrawPlayerCharacter = props =>
    <div
        style = {{
            position: 'relative',
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

export default connect(mapStateToProps)(DrawPlayerCharacter)