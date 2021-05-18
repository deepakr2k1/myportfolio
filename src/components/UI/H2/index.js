import React from 'react'
import './style.css'

function H2(props) {
    return (
        <div style={props.styles}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default H2;