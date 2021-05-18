import React from 'react'
import Button from './UI/Button'
import Img from '../assets/home.png'

function Intro() {
    return (
        <div id="home" className="container">
            <div className="flexRow justify-sb align-center">
                <div style={{width:"40%"}}>
                    <p className="uppercase bold-500 textColor ls-1 mtb-10">
                        <span className="primaryColor">Hello, </span> 
                        I am Deepak Rathore
                    </p>
                    <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
                    <p className="font-14 grey mtb-10">Full Stack Developer</p>
                    <div className="flexRow" style={{margin: "30px 0"}}>
                        <div>
                            <Button label="Hire Me"/>
                        </div>
                        <div className="mlr-10" >
                            <Button label="Download CV" invert={true}/>
                        </div>
                    </div>
                </div>
                <div style={{width: "60%"}}>
                    <img style={{width: "100%"}} src={Img}/>
                </div>
            </div>
        </div>
    )
}

export default Intro;