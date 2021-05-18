import React from 'react'
import Card from './UI/card'
import MediumHeading from './UI/mediumHeading'
import SmallHeading from './UI/smallHeading'
import Skills from './UI/skills'
import ReactIcon from "../assets/react_icon.png"
import MongodbIcon from "../assets/mongodb_icon.png"
import ExpressIcon from "../assets/express_icon.png"
import NodeIcon from "../assets/node_icon.png"

export default function Specializing() {
    return (
        <div className="container" style={{minWidth: "100px"}}>
            <Card style={{ padding: "10px" }}>
                <SmallHeading text="What I do" />
                <MediumHeading text="Specialzing" />
                <div style={{ padding: "10px", marginTop: "30px" }} className="flexRow justify-sa">
                    <Skills value = {72} src={MongodbIcon}/>
                    <Skills value = {80} src={ExpressIcon}/>
                    <Skills value = {60} src={ReactIcon}/>
                    <Skills value = {82} src={NodeIcon}/>
                </div>
            </Card>
        </div>
    )
}