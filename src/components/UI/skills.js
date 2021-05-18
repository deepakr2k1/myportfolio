import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './skills.css'

export default function Skills(props) {
    return (
        <div className="skillContainer mlr-10 mtb-10">
            <CircularProgressbarWithChildren
                style = {{margin: "200px"}}
                value={props.value}
                strokeWidth={5}
                styles={buildStyles({
                    textColor: "red",
                    pathColor: "#16c79a",
                })}>
                <img width="80%" src={props.src} alt="React"/>
            </CircularProgressbarWithChildren>
        </div>
    )
}

// https://codesandbox.io/s/vymm4oln6y?file=/index.js&resolutionWidth=1400&resolutionHeight=1080