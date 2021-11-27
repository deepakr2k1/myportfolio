import React from 'react'
import './style.css'

export default function H3(props) {
    return (
        <div>
            <h3 style={props.styles}>{props.children}</h3>
        </div>
    )
}