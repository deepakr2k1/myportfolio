import React from 'react'
import H1 from '../UI/H1'
import Skills from './skills'
import Triangle from '../UI/Triangle'

import react_icon from '../../assets/icons8-react-native-100.png';
import bootstrap_icon from '../../assets/icons8-bootstrap-100.png';
import material_ui_icon from '../../assets/icons8-material-ui-100.png';
import js_icon from '../../assets/icons8-javascript-100.png';
import html_icon from '../../assets/icons8-html-5-100.png';
import css_icon from '../../assets/icons8-css3-100.png';
import node_icon from '../../assets/icons8-node-js-100.png';
import mongodb_icon from '../../assets/icons8-mongodb-100.png';
import mysql_icon from '../../assets/icons8-mysql-100.png';
import express_icon from '../../assets/express_icon.png';
import postman_icon from '../../assets/postman_icon.png';
import aws_icon from '../../assets/icons8-aws-100.png';
import docker_icon from '../../assets/icons8-docker-100.png';
import git_icon from '../../assets/icons8-git-100.png';
import github_icon from '../../assets/icons8-github-100.png';
import ubuntu_icon from '../../assets/icons8-ubuntu-100.png';
import vim_icon from '../../assets/icons8-vim-100.png';

export default function Specialization() {
    let frontend = {
        heading: "FRONTEND TECHNOLOGIES",
        icons: [react_icon, bootstrap_icon, material_ui_icon, js_icon, html_icon, css_icon],
        tooltip: ["React", "Bootstrap", "Material UI", "JavaScript", "HTML 5", "CSS 3"]
    }
    let backend = {
        heading: "BACKEND TECHNOLOGIES",
        icons: [node_icon, express_icon, mongodb_icon, mysql_icon, postman_icon],
        tooltip: ["Node JS", "Express", "Mongo DB", "MySql", "Postman"]
    }
    let other = {
        heading: "OTHER TOOLS & TECHNOLOGIES",
        icons: [aws_icon, docker_icon, git_icon, github_icon, ubuntu_icon, vim_icon,],
        tooltip: ["AWS", "Docker", "Git", "Github", "Ubuntu", "Vim"]
    }
    return (
        <div id="skills">
            <Triangle styles={{ bottom: 0, borderRight: 0, borderBottom: "7.5vh solid #1a1c20" }}/>
            <div class="skillsContiainer">
                <H1>Skills</H1>
                <Skills tech={frontend} />
                <Skills tech={backend} />
                <Skills tech={other} />
            </div>
            <Triangle styles={{ top: 0, borderLeft: 0, borderTop: "7.5vh solid #1a1c20" }}/>
        </div>
    )
}