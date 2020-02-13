import React from 'react'
import * as Maps from '../maps'
import * as Vars from '../../config/constantVariables'
import DrawPlayerCharacter from '../characters/DrawPlayerCharacter'

const World = props =>
    <div
        style={{
            position: 'relative',
            height: Vars.maxHeight,
            width: Vars.maxWidth,
            margin: '50px auto',
        }}
    >
        <Maps.map1 />
        <DrawPlayerCharacter />
    </div>

export default World