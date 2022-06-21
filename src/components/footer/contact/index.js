import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import H1 from '../../UI/H1';
import H2 from '../../UI/H2';
import Button from '../../UI/Button'
import './style.css'

function Contact(props) {

    const green = "rgb(23 119 58)";
    const red = "rgb(146 21 21)";

    const [showMsg, setShowMsg] = useState(false);
    const [status, setStatus] = useState(null);

    function showMessage(status) {
        var msg, color;
        if(status) {
            msg = "Message Sent Successfully, I'll reply to you soon";
            color = green;
        } else {
            msg = "Some Error Occured! Please try later"
            color = red;
        }

        return (
            <div style={{background: color}} className="modal">
                <span style={{color: "whitesmoke"}}>{msg}</span>
                <i id="cancel" onClick={()=>{setShowMsg(false)}} class="bi bi-x-lg"></i>
            </div>
        )
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_mdq2so8', 'template_ligijcx', e.target, 'user_z1RdjuI9kzp5IzpOLacZD')
        .then((result) => {
            setStatus(true);
            setShowMsg(true);
        }, (error) => {
            setStatus(false);
            setShowMsg(true);
        });
    }

    return (
        <div style={props.styles}>
            <H1>Contact Me</H1>
            <H2 styles={{paddingBottom: "20px"}}>Get in Touch</H2>
            <form onSubmit={sendEmail}>
                <div>
                    <div className="wrap">
                        <input className="mtb-5" type="text" name="name" placeholder="Your Name" required={true} />
                        <input className="mtb-5" type="email" name="email" placeholder="Your E-mail" required={true} />
                    </div>
                    <div>
                        <textarea type="text" name="message" placeholder="Your Message here" required={true} rows="6" />
                    </div>
                    {
                        showMsg ? showMessage(status) : null
                    }
                </div>
                <Button onClick={sendEmail} label="SEND MESSAGE" />
            </form>
        </div>
    )
}

export default Contact;
// {/* <input id="submitButton" type="submit" value=""/> */}