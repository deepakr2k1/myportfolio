import React from 'react'
import './style.css'

export default function Text(props) {
    return (
        <p style={props.styles} id="text">{props.children}</p>
    )
}
