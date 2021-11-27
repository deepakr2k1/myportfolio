import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularImage(props) {
    return (
        <div>
            <CircularProgressbarWithChildren
                // style={props.styles}
                strokeWidth={1}
                styles={buildStyles({
                    pathColor: "green",
                    backgroundColor: "#343434",
                })}>
                <img background="green" width="80%" src={props.src}/>
            </CircularProgressbarWithChildren>
        </div>
    )
}
