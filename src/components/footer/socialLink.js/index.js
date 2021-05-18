import React from 'react'
import './style.css'

export default function SocialLink(props) {
    return (
        <div id="socialContainer">
            <a href="https://www.facebook.com/profile.php?id=100028297470822" target="_blank" id="socialIcon"> <i class="fa fa-facebook"></i> </a>
            <a href="https://www.instagram.com/deepakrathore2k1/" target="_blank"  id="socialIcon"> <i class="fa fa-instagram"></i> </a>
            <a href="mailto:deepakrathore2k1@gmail.com" target="_blank"  id="socialIcon"> <i class="fa fa-google"></i> </a>
            <a href="https://www.linkedin.com/in/deepakrathore2k1/" target="_blank"  id="socialIcon"> <i class="fa fa-linkedin"></i> </a>
            <a href="https://github.com/deepakrathore2k1" target="_blank"  id="socialIcon"> <i class="fa fa-github"></i> </a>
            <a href="https://twitter.com/deepakrathore2k" target="_blank"  id="socialIcon"> <i class="fa fa-twitter"></i> </a>
        </div>
    )
}