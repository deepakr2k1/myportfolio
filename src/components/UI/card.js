import React from 'react'
import MediumHeading from './mediumHeading'
import SmallHeading from './smallHeading'
import './card.css'

export default function Card(props) {
    return (
        <div className="card" style={props.style}>
            {props.children}
        </div>
    )
}
