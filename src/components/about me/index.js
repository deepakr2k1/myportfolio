import React from 'react';
import H1 from '../UI/H1';
import H2 from '../UI/H2';
import DeveloperSVG from '../../assets/developer_2.svg';
import "react-circular-progressbar/dist/styles.css";
import './style.css';

export default function AboutMe() {
    return (
        <div id="about_me">
            <H1>About Me</H1>
            <H2>What I DO</H2>
            <div className="aboutMe">
                <div class="aboutMeLeft">
                    <p>Hey there! I'm Deepak Rathore, an avid programmer and web developer with a fervent enthusiasm for real-world projects.
                        I thrive on the collaborative process, always seeking imaginative ways to communicate ideas and connect with new people.</p>

                    <p>My journey has taken me through esteemed companies like
                        <a style={ { color: "#16c79a" } } target="noreferrer" href="https://www.amazon.de/"> Amazon</a>,
                        <a style={ { color: "#16c79a" } } target="noreferrer" href="https://www.deutsche-bank.de/"> Deutsche Bank</a>,
                        <a style={ { color: "#16c79a" } } target="noreferrer" href="https://www.dunzo.com/"> Dunzo</a>,
                        <a style={ { color: "#16c79a" } } target="noreferrer" href="https://www.practo.com/"> Practo </a>
                        where I've had the privilege
                        to contribute to incredible projects alongside talented team members. I've worn various hats, from Full Stack Developer to
                        Backend Developer and iOS Developer, delving into a diverse array of technologies including Spring Boot, React, Angular, Node.js, iOS
                        development (Swift), Postgres, MySQL, MongoDB, and AWS.</p>

                    <p>Let's create something amazing together! Feel free to explore my portfolio to learn more about my work and experiences.</p>
                </div>
                <div className="aboutMeRight">
                    <img width="100%" height="fit-content" src={ DeveloperSVG } alt="Developer PNG" />
                </div>
            </div>
        </div>
    );
}