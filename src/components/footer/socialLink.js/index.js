import React from 'react';
import './style.css';

export default function SocialLink(props) {
    return (
        <div id="socialContainer">
            <a href="mailto:deepakr2k1@icloud.com" target="noreferrer" id="socialIcon"> <i class="fa fa-envelope"></i> </a>
            <a href="https://www.linkedin.com/in/deepakr2k1/" target="noreferrer" id="socialIcon"> <i class="fa fa-linkedin"></i> </a>
            <a href="https://github.com/deepakr2k1" target="noreferrer" id="socialIcon"> <i class="fa fa-github"></i> </a>
            <a href="https://twitter.com/deepakr2k1" target="noreferrer" id="socialIcon"> <i class="fa fa-twitter"></i> </a>
            <a href="https://www.instagram.com/deepakr2k1/" target="noreferrer" id="socialIcon"> <i class="fa fa-instagram"></i> </a>
            <a href="https://www.facebook.com/profile.php?id=100028297470822" target="noreferrer" id="socialIcon"> <i class="fa fa-facebook"></i> </a>
        </div>
    );
}