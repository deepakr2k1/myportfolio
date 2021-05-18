import React from 'react'
import Project from './project'
import PingPongGameImg from '../../assets/ping_pong_game_img.PNG'
import TouristBlogImg from '../../assets/ping_pong_game_img.PNG'
import H1 from '../UI/H1'
import H2 from '../UI/H2'

export default function Portfolio() {
    return (
        <div id="projects" className="container" style={{marginTop: "30px"}}>
            <H1>Projects</H1>
            <H2 styles={{marginTop: "32px", textAlign: "center"}}>Some Things I’ve Built</H2>
            <div>
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
                    inverse={true}
                />
            </div>
        </div>
    )
}
