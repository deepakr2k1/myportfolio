import React, { useState } from 'react'
import './style.css'

export default function Button(props) {
    return (
        <>
            <button id="btn" href="#" > {props.label} </button>
        </>
    )
}
