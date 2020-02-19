import React from 'react'
import { connect } from 'react-redux'
import * as Vars from '../../config/constantVariables'
import * as Tree from './treeSpritePositions'
import EnvironmentalObject from './EnvironmentalObject'

const Map1 = props => {

    let renderEnv

        // checks to see if a tileset of objects exists for this map
        // if it does not exist, then create one
        if ( props.tiles.map1 ) {
            renderEnv = props.tiles.map1.renderEnv.slice()
        }
        else
            props.dispatch({ type: 'GENERATE_MAP_TILESET', details: { map1: { height: Vars.maxMapHeight, width: Vars.maxMapWidth }, name: 'map1', objectSize: Vars.objectSpriteSize } })

    return <div
            style={{
                position: 'relative',
                width: Vars.maxMapWidth,
                height: Vars.maxMapHeight,
                backgroundColor: 'brown',
                border: '4px solid blue',
            }}
        >
            {
                // call the renderTile function to draw environmental objects on the map
                renderEnv ?
                    renderEnv.map( env => env )
                :
                    null
            }
        </div>
}

const mapStateToProps = state => {
    return {
        tiles: state.environment.tiles
    }
}

export default connect(mapStateToProps)(Map1)