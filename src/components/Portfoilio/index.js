import React from 'react'
import Project from './project'
import H1 from '../UI/H1'
import H2 from '../UI/H2'

export default function Portfolio() {
    return (
        <div id="projects" className="container" style={{ marginTop: "30px", minHeight: "100vh" }}>
            <H1>Projects</H1>
            <H2 styles={{ marginTop: "32px", textAlign: "center" }}>Some Things I’ve Built</H2>
            <div className="text-center" style={{ marginTop: 24 }}>
                <Project
                    title="Ping pong Multiplayer browser game"
                    desc={[
                        "An online browser game where multiple users can play games at the same time & also create their own room for a friendly match.",
                        "It is built with socket.io and node.js for Backend, & further uses the P5.js library for drawing game objects."
                    ]}
                    tags={[
                        "Node.js", "Express", "Socket.io", "P5.js"
                    ]}
                    links={{ git: "https://github.com/deepakrathore2k1/Multiplayer-online-ping-pong-game", online: "https://online-ping-pong-game.herokuapp.com/" }}
                />
                <Project
                    title="Tourist’s Blog Website"
                    desc={[
                        "An online website to read & create tourism blogs, It includes User Authentication system for the users (login/register)",
                        "Backend is created using Node.js, Express.js, and used MongoDB for the database. Its supports CRUD operations."
                    ]}
                    tags={[
                        "Node.js", "Express", "MongoDB", "User Auth"
                    ]}
                    links={{ git: "https://github.com/deepakrathore2k1/Tourist-s-Blogs", online: "https://tourists-blogs.herokuapp.com/blogs" }}
                />
                <Project
                    title="House Price Prediction API"
                    desc={[
                        "It predicts the prices of houses (Bangalore), based on different features like BHK, Location, etc.",
                        "Linear Regression algorithm is used for model training, FastAPI is used as a framework for API and hosted at Heroku."
                    ]}
                    tags={[
                        "Fast API", "Machine Learning", "Python", "Heroku"
                    ]}
                    links={{ git: "https://github.com/deepakrathore2k1/House-Price-Prediction-API", online: "https://hpp-api.herokuapp.com/docs" }}
                />
                <Project
                    title="Add data via Excel"
                    desc={[
                        "An online website to Insert data of candidates to MongoDB database via uploading excel file(.xlsx or .xls) on landing page",
                        "Backend is created using Node.js, Express.js, & multer is used handling file upload & deletion."
                    ]}
                    tags={[
                        "Node.js", "Express", "Multer"
                    ]}
                    links={{ git: "https://github.com/deepakrathore2k1/inserting-data-via-excel", online: "https://inserting-data-via-excel.herokuapp.com/" }}
                />
            </div>
        </div>
    )
}