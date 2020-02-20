import store from '../../store'

const PlayerMovement = DrawPlayerCharacter => {
    
    function moveCharacter(e) {
        e.preventDefault()
        console.log(store.getState())
        if ( e.keyCode > 36 && e.keyCode < 41 )
            store.dispatch({ type: 'MOVE_PLAYER', direction: e.keyCode })
    }
    
    window.addEventListener('keydown', (e) => moveCharacter(e))
    
    return DrawPlayerCharacter
}

export default PlayerMovement