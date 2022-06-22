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
                    <p>Hello! My name is Deepak Rathore and I'm passionate about programming & web-dev.
                        I love to work on real world projects and also loves to reaching out the new people
                        and finding imaginative ways to communicate ideas.</p>

                    <p style={{ marginTop: 6 }}>I had worked as SDE Intern at
                        <a style={{ color: "#16c79a" }} target="noreferrer" href="https://www.dunzo.com/"> Dunzo </a> ,
                        <a style={{ color: "#16c79a" }} target="noreferrer" href="https://www.practo.com/"> Practo </a> ,
                        <a style={{ color: "#16c79a" }} target="noreferrer" href="https://www.linkedin.com/company/fan-inc./about/"> Fans Inc. </a> ,
                        <a style={{ color: "#16c79a" }} target="noreferrer" href="https://www.klimb.io/"> Klimb.io</a>.
                        I got to work on the amazing projects with great team members.
                        I worked on different software profiles includes Full Stack Developer, Backend Developer and iOS Developer.
                        and different technologies includes React, Angular, Node JS, ios development (swift), MySql, MongoDB, AWS.
                    </p>
                </div>
                <div className="aboutMeRight">
                    <img width="100%" height="fit-content" src={DeveloperSVG} alt="Developer PNG" />
                </div>
            </div>
        </div>
    )
}