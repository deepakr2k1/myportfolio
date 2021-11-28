import React from 'react'
import './style.css'

export default function Tag(props) {
    return (
        <span style={props.styles}>
            {props.children}
        </span>
    )
}