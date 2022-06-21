import React from 'react'
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import Triangle from '../UI/Triangle';
import SocialLink from './socialLink.js/index.js';
import Contact from './contact/index';
import Tag from '../UI/Tag/index.js';

function Footer() {
    return (
        <footer>
            <div id="contact">
                <Contact/>
            </div>
            <Triangle styles={{ bottom: 0, borderRight: 0, borderBottom: "5vh solid #1a1c20" }}/>
            <div id="links">
                <div>
                    <a href="#home"><Tag>Home</Tag></a>
                    <Tag>|</Tag>
                    <a href="#about_me"><Tag>About Me</Tag></a>
                    <Tag>|</Tag>
                    <a href="#skills"><Tag>Skills</Tag></a>
                    <Tag>|</Tag>
                    <a href="#projects"><Tag>Projects</Tag></a>
                </div>
                <SocialLink/>
                <p className="footerText">Designed & Built by Deepak Rathore 2021<sup>&#169;</sup></p>
            </div>
        </footer>
    )
}

export default Footer;