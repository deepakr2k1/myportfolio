import React from 'react'
import Project from './UI/project'
import SmallHeading from './UI/smallHeading'
import PingPongGameImg from '../assets/ping_pong_game_img.PNG'
import TouristBlogImg from '../assets/tourist_blog_img.PNG'

export default function ProjectsList() {
    return (
        <div className="container" style={{marginTop: "30px"}}>
            <SmallHeading text="Projects" />
            <div className="flexRow wrap">
                <Project 
                    img={PingPongGameImg} 
                    title="Ping pong Multiplayer browser game" 
                    desc={[
                        "An online browser game where multiple users can play games at the same time & also create their own room for a friendly match.",
                        "It is built with socket.io and node.js for Backend, & further uses the P5.js library for drawing game objects."
                        ]} 
                        tags = {[
                            "HTML", "CSS", "uigugigiuig", "Node.js", "Socket.io", "P5.js"
                        ]} 
                    links={{git: "https://github.com/", online: "github.com"}}
                />
                <Project
                    img={TouristBlogImg} 
                    title="Ping pong Multiplayer browser game" 
                    desc={[
                        "An online browser game where multiple users can play games at the same time & also create their own room for a friendly match.",
                    ]} 
                    tags = {[
                        "HTML", "CSS", "Javascript", "Node.js", "Socket.io", "P5.js"
                    ]} 
                    links={{git: "https://github.com/", online: "github.com"}}
                    inverse={true}
                />
                <Project
                    img={TouristBlogImg} 
                    title="Ping pong Multiplayer browser game" 
                    desc={[
                        "An online browser game where multiple users can play games at the same time & also create their own room for a friendly match.",
                    ]} 
                    tags = {[
                        "HTML", "CSS", "Javascript", "Node.js", "Socket.io", "P5.js"
                    ]} 
                    links={{git: "https://github.com/", online: "github.com"}}
                    inverse={true}
                />
                <Project 
                    img={PingPongGameImg} 
                    title="Ping pong Multiplayer browser game" 
                    desc={[
                        "An online browser game where multiple users can play games at the same time & also create their own room for a friendly match.",
                        "It is built with socket.io and node.js for Backend, & further uses the P5.js library for drawing game objects."
                        ]} 
                        tags = {[
                            "HTML", "CSS", "uigugigiuig", "Node.js", "Socket.io", "P5.js"
                        ]} 
                    links={{git: "https://github.com/", online: "github.com"}}
                />
            </div>
        </div>
    )
}
