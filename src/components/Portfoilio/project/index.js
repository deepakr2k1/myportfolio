import {React,useState } from 'react'
import H3 from '../../UI/H3';
import Text from '../../UI/Text';
import Tag from '../../UI/Tag';
import './style.css'

export default function Project(props) {
    return (
        <div className="project">
            <div className="projectText">
                <H3 styles={{fontSize: "1rem", color: "#f8f5f1", marginTop: "16px", marginBottom: "16px"}}>{props.title}</H3>
                <div>
                    { props.desc.map((item) => <Text styles={{marginTop: "4px", textAlign: "left"}}>{item}</Text>) }
                </div>
                <div id="projectFooter">
                    <div className="wrap">
                        { props.tags.map((item) => <Tag styles={{fontSize: "0.9rem", display: "inline-block"}}>{item}</Tag>) }
                    </div>
                    <div>
                        <a href={props.links.git} target="_blank"><i class="bi bi-github icon"></i></a>
                        <a href={props.links.online} target="_blank"><i class="bi bi-arrow-up-right-circle-fill icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}