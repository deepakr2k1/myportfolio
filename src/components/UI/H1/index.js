import React from 'react'
import './style.css'

function H1(props) {
    return (
        <div id="box" style={props.styles}>
            <h1>{props.children}</h1>
            <div id="underline"></div>
        </div>
    )
}

export default H1;