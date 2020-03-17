import React from 'react'

const EnvironmentalObject = props => {

    let envObject

    if ( props.envObject )
        envObject = props.envObject
    
    if ( envObject )
        return <div
                name={envObject.name}
                style = {{
                    position: 'absolute',
                    top: props.position.y,
                    left: props.position.x,
                    background: `url(../${envObject.imgUrl}) no-repeat ${envObject.bg_x}px ${envObject.bg_y}px`,
                    width: `${envObject.width}px`,
                    height: `${envObject.height}px`,
                }}
            >
                
            </div>
    else
        return null
}


export default EnvironmentalObject
