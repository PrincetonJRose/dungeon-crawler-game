import store from '../../store'

const PlayerMovement = DrawPlayerCharacter => {
    
    function moveCharacter(e) {
        e.preventDefault()
        let layout = [...store.getState().environment.tiles.map1.layout]
        if ( e.keyCode > 36 && e.keyCode < 41 )
            store.dispatch({ type: 'MOVE_PLAYER', location: { keyCode: e.keyCode, layout: layout } })
    }
    
    window.addEventListener('keydown', (e) => moveCharacter(e))
    
    return DrawPlayerCharacter
}

export default PlayerMovement