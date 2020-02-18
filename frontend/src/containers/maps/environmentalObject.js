import React from 'react'
import { connect } from 'react-redux'

const environmentalObject = props =>
    <div
        style = {{
            position: 'absolute',
            top: props.position.y,
            left: props.position.x,
            backgroundImage: `url(../${props.imgUrl})`,
            backgroundPosition: `0 0`,
            width: props.size.width,
            height: props.size.height,
        }}
    >
        
    </div>

const mapStateToProps = state => {
    
}

export default connect(mapStateToProps)(environmentalObject)