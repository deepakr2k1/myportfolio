import {React,useState } from 'react'
import MediumHeading from './mediumHeading'
import Tag from './Tag';
import './project.css'

export default function Project(props) {
    const [showText, setShowText] = useState(false);
    return (
        <div className="project" onMouseEnter={() => {setShowText(true)}} onMouseLeave={() => {setShowText(false)}}>
            {
                !showText ? (
                    <img style={{width:"100%", height:"auto"}} src={props.img}/>
                ) : (
                    <div className="parent">
                        <MediumHeading text={props.title}/>
                        <div className="mtb-10">
                            {
                                props.desc.map((item) =>
                                    <p className="mtb-10">{item}</p>
                                )
                            }
                        </div>
                        <div className="child mtb-10">
                            <div className="wrap text-right mtb-10 mr-40"> 
                                {
                                    props.tags.map((item) =>
                                        <Tag>{item}</Tag>
                                    )
                                }
                            </div>
                            <div className="wrap text-right mtb-10 mr-40">
                                <a href={props.links.git} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="icon bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg></a>
                                <a href={props.links.online} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="icon bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}