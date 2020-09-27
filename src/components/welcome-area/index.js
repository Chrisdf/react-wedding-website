import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import video from "../../images/welcome/balmorhea.mp4"

const Welcome = () => {
    return (
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Come join us at the beautiful Balmorhea Wedding Venues to celebrate the marriage of Chris and Malendy Frantz!</p>
                            <div className="btn"><AnchorLink href='#rsvp'>RSVP</AnchorLink></div>
                            <div className="btn"><AnchorLink href='#location'>Location</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;