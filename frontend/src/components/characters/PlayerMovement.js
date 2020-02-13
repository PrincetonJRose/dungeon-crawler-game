import store from '../../store'

const PlayerMovement = DrawPlayerCharacter => {
    
    function moveCharacter(e) {
        e.preventDefault()
        if ( e.keyCode > 36 && e.keyCode < 41 )
            store.dispatch({ type: 'MOVE_PLAYER', direction: e.keyCode })
    }
    
    window.addEventListener('keydown', (e) => moveCharacter(e))
    
    return DrawPlayerCharacter
}

export default PlayerMovement