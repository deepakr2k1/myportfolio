import React from 'react'
import H1 from '../UI/H1'
import H2 from '../UI/H2'
import DeveloperSVG from '../../assets/developer_2.svg';
import "react-circular-progressbar/dist/styles.css";
import './style.css'

export default function AboutMe() {
    return (
        <div id="about_me">
            <H1>About Me</H1>
            <H2>What I DO</H2>
            <div className="aboutMe">
                <div class="aboutMeLeft">
                    <p>Hello! My name is Deepak Rathore and I'm passionate about programming & web-dev. I love to work on real world projects and also loves to reaching out the new people and finding imaginative ways to communicate ideas.</p>
                    <p style={{ marginTop: 6 }}>I worked as a Full Stack Developer Intern at <a style={{ color: "#16c79a" }} target="noreferrer" href="https://www.klimb.io/"> Klimb.io </a> where I worked on Customer Signup flow that includes UI Design, handling APIs, managing User Databases and Data Security, and Re-designed the UI features of the Website that increased session duration of Customer by 34%.</p>
                </div>
                <div className="aboutMeRight">
                    <img width="100%" src={DeveloperSVG} alt="Developer PNG" />
                </div>
            </div>
        </div>
    )
}