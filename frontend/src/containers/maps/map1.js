import React from 'react'
import { connect } from 'react-redux'
import * as Vars from '../../config/constantVariables'
import * as Tree from './treeSpritePositions'
import EnvironmentalObject from './EnvironmentalObject'

const Map1 = props => {

    let layout
    let renderEnv

        // checks to see if a tileset of objects exists for this map
        // if it does not exist, then create one
        if ( props.tiles.map1 ) {
            layout = [...props.tiles.map1.layout]
            renderEnv = []
            let position = {
                x: 0,
                y: 0,
            }
            layout.forEach( row => {
                let array = []
                row.forEach( section => {
                    if ( section === 'G' )
                        array.push( <EnvironmentalObject envObject={Tree.grass} position={{...position}} /> )
                    else if ( section === 'T' )
                        array.push( <EnvironmentalObject envObject={Tree.tree} position={{...position}} /> )
                    else if ( section === 'S' )
                        array.push( <EnvironmentalObject envObject={Tree.treeStump} position={{...position}} /> )
                    else
                        array.push( null )
                    position.x += 40
                })
                renderEnv.push( array )
                position.x = 0
                position.y += 40
            })
            renderEnv = renderEnv.flat()
            console.log( renderEnv )
        }
        else
            props.dispatch({ type: 'GENERATE_MAP_TILESET', details: { map1: { height: Vars.maxMapHeight, width: Vars.maxMapWidth }, name: 'map1', objectSize: Vars.objectSpriteSize } })

            function renderTile ( ) {
                return null
            }

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