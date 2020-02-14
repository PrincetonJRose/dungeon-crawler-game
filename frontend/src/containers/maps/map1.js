import React from 'react'
import { connect } from 'react-redux'
import * as Vars from '../../config/constantVariables'

const Map1 = props => {

    function renderTile (props) {
        if ( props.tiles.map1 )
            return null
        else
            props.dispatch({ type: 'GENERATE_MAP_TILESET', details: { map1: { height: Vars.maxMapHeight, width: Vars.maxMapWidth }, name: 'map1', objectSize: Vars.objectSpriteSize } })
        return null
    }

    return <div
            style={{
                position: 'relative',
                width: Vars.maxMapWidth,
                height: Vars.maxMapHeight,
                backgroundColor: 'green',
                border: '4px solid blue',
            }}
        >
            {
                renderTile( props )
            }
        </div>
}

const mapStateToProps = state => {
    return {
        tiles: state.environment.tiles
    }
}

export default connect(mapStateToProps)(Map1)