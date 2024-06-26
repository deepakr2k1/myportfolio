import React from 'react';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import SocialLink from './socialLink.js/index.js';
import Tag from '../UI/Tag/index.js';

function Footer() {
    return (
        <footer>
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
                <SocialLink />
                <p className="footerText">Designed & Built by Deepak Rathore 2021<sup>&#169;</sup></p>
            </div>
        </footer>
    );
}

export default Footer;