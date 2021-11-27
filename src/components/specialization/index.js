import React from 'react'
import H1 from '../UI/H1'
import Skills from './skills'

import react_icon from '../../assets/icons8-react-native-100.png';
import redux_icon from '../../assets/icons8-redux-100.png';
import material_ui_icon from '../../assets/icons8-material-ui-100.png';
import js_icon from '../../assets/icons8-javascript-100.png';
import html_icon from '../../assets/icons8-html-5-100.png';
import css_icon from '../../assets/icons8-css3-100.png';
import node_icon from '../../assets/icons8-node-js-100.png';
import mongodb_icon from '../../assets/icons8-mongodb-100.png';
import express_icon from '../../assets/express_icon.png';
import postman_icon from '../../assets/postman_icon.png';
import git_icon from '../../assets/icons8-git-100.png';
import github_icon from '../../assets/icons8-github-100.png';
import ubuntu_icon from '../../assets/icons8-ubuntu-100.png';
import heroku_icon from '../../assets/icons8-heroku-100.png';

export default function Specialization() {
    let frontend = {
        heading: "FRONTEND TECHLOGIES",
        icons: [react_icon, redux_icon, material_ui_icon, js_icon, html_icon, css_icon],
        tooltip: ["React", "Redux", "Material UI", "JavaScript", "HTML 5", "CSS 3"]
    }
    let backend = {
        heading: "BACKEND TECHLOGIES",
        icons: [node_icon, express_icon, mongodb_icon, postman_icon],
        tooltip: ["Node JS", "Express", "Mongo DB", "Postman"]
    }
    let other = {
        heading: "OTHER TOOLS & TECHLOGIES",
        icons: [git_icon, github_icon, ubuntu_icon, heroku_icon],
        tooltip: ["Git", "Github", "Ubuntu", "Heroku"]
    }
    return (
        <div id="skills">
            <H1>Skills</H1>
            <Skills tech={frontend}/>
            <Skills tech={backend}/>
            <Skills tech={other}/>
        </div>
    )
}