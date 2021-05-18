import React from 'react'
import './style.css'

export default function H3(props) {
    return (
        <div style={props.styles}>
            <h3>{props.children}</h3>
        </div>
    )
}