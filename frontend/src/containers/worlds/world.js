import React from 'react'
import * as Maps from '../maps'
import * as Vars from '../../config/constantVariables'
import DrawPlayerCharacter from '../../components/characters/DrawPlayerCharacter'

const World = () =>
    <div
        style={{
            position: 'relative',
            height: Vars.maxWorldHeight,
            width: Vars.maxWorldWidth,
            margin: '50px auto',
        }}
    >
        <Maps.map1 />
        <DrawPlayerCharacter />
    </div>

export default World