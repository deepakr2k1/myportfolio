import {React,useState } from 'react'
import H3 from '../../UI/H3';
import Text from '../../UI/Text';
import Tag from '../../UI/Tag';
import './style.css'

export default function Project(props) {
    return (
        <div className="project">
            {
                !props.inverse ? (
                    <div id="imgBlock">
                        <img src={props.img}/>
                    </div>
                ) : null
            }
            
            <div className="projectText">
                <H3 styles={{marginTop: "16px", marginBottom: "16px"}}>{props.title}</H3>
                <div>
                    { props.desc.map((item) => <Text styles={{marginTop: "4px"}}>{item}</Text>) }
                </div>
                <div id="projectFooter">
                    <div>
                        { props.tags.map((item) => <Tag styles={{fontSize: "0.9rem"}}>{item}</Tag>) }
                    </div>
                    <div>
                        <a href={props.links.git} target="_blank"><i class="bi bi-github icon"></i></a>
                        <a href={props.links.online} target="_blank"><i class="bi bi-arrow-up-right-circle-fill icon"></i></a>
                    </div>
                </div>
            </div>
            
            {
                props.inverse ? (
                    <div id="imgBlock">
                        <img src={props.img}/>
                    </div>
                ) : null
            }
        </div>
    )
}