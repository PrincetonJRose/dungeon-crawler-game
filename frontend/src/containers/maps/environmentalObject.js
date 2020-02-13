import React from 'react'

const environmentalObject = props =>
    <div
    style = {{
        position: 'absolute',
        top: props.position.y,
        left: props.position.x,
        backgroundImage: `url(../tree_sprites.png)`,
        backgroundPosition: `0 0`,
        width: props.size.width,
        height: props.size.height,
    }}
    >
        
    </div>

export default environmentalObject