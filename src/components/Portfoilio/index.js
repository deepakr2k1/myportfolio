import React from 'react';
import Project from './project';
import H1 from '../UI/H1';
import H2 from '../UI/H2';

export default function Portfolio() {
    return (
        <div id="projects" className="container" style={ { marginTop: "30px" } }>
            <H1>Projects</H1>
            <H2 styles={ { marginTop: "32px", textAlign: "center" } }>Some Things I’ve Built</H2>
            <div className="text-center" style={ { marginTop: 24, marginBottom: 48 } }>
                <Project
                    title="CP Edge case Finder"
                    desc={ [
                        "Created a web app to generate targeted test cases from corrected code & validate against programmers code.",
                        "Built a multithreaded app with Java Spring Boot and React, supporting C++, Java, and Python enhancing speed and user experience."
                    ] }
                    tags={ [
                        "Spring Boot", "Java", "Multithreading", "React"
                    ] }
                    links={ { git: "https://github.com/deepakr2k1/cp-edge-case-finder", online: "#" } }
                />
                <Project
                    title="Tourist’s Blog Website"
                    desc={ [
                        "An online website to read & create tourism blogs, It includes User Authentication system for the users (login/register)",
                        "Backend is created using Node.js, Express.js, and used MongoDB for the database. Its supports CRUD operations."
                    ] }
                    tags={ [
                        "Node.js", "RabbitMQ", "Authentication", "Caching"
                    ] }
                    links={ { git: "https://github.com/deepakr2k1/tourism-blogs", online: "#" } }
                />
                <Project
                    title="Instant Bot"
                    desc={ [
                        "A desktop application to create Bots that can trigger different repetitive GUI events to finish repetitive tasks quickly",
                        "It helps user to perform repetitive task with low efforts."
                    ] }
                    tags={ [
                        "Eel", "Python", "PyAutoGUI", "HTML/CSS"
                    ] }
                    links={ { git: "https://github.com/deepakr2k1/Instant-Bot", online: "#" } }
                />
                <Project
                    title="House Price Prediction API"
                    desc={ [
                        "It predicts the prices of houses (Bangalore), based on different features like BHK, Location, etc.",
                        "Linear Regression algorithm is used for model training, FastAPI is used as a framework for API and hosted at Heroku."
                    ] }
                    tags={ [
                        "Fast API", "Machine Learning", "Python", "Heroku"
                    ] }
                    links={ { git: "https://github.com/deepakr2k1/House-Price-Prediction-API", online: "#" } }
                />
            </div>
        </div>
    );
}