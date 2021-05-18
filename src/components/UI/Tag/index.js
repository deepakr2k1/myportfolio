import React from 'react'
import './style.css'

export default function Tag(props) {
    console.log(props.styles)
    return (
        <span style={props.styles}>
            {props.children}
        </span>
    )
}