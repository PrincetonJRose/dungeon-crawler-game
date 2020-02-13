import React from 'react'
import { connect } from 'react-redux'
import * as Vars from '../../config/constantVariables'

const Map1 = props =>
    <div
        style={{
            position: 'relative',
            width: Vars.maxWidth,
            height: Vars.maxHeight,
            backgroundColor: 'green',
            border: '4px solid white',
        }}
    >
        {
            props.tiles.map1 ? 
                console.log('there is a map now yay!')
            :
                () => props.dispatch({ type: 'GENERATE_MAP_TILESET', details: { name: 'map1', height: Vars.maxHeight, width: Vars.maxWidth } })
        }
    </div>

let mapStateToProps = state => {
    return {
        envObjects: state.environment.environmentObjects,
        tiles: state.environment.tiles
    }
}

export default connect(mapStateToProps)(Map1)