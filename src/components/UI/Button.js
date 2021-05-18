import React from 'react'
import { colors } from "./UIStyle";

export default function Button(props) {
    return (
        <button href="#" style={{
                boxSizing: "border-box",
                padding: "10px 20px",
                background: props.invert ? "transparent" : colors.primaryColor,
                color: props.invert ? colors.primaryColor : "#fff",
                display: "inline-block",
                borderRadius: "20px",
                boxShadow: props.invert ? "none" : "#6dba6d 0px 0px 10px 0px",
                border: "1px solid",
                borderColor: props.invert ? colors.primaryColor : "transparent",
                fontSize: 12,
                letterSpacing: "1px",
            }}> {props.label} </button>
    )
}
