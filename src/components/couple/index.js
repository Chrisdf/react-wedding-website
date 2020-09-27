import React from 'react'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/malendy-cropped.jpg'
import couple2 from '../../images/couple/chris-cropped.jpg'
import './style.css'

const Couple = () => {
    return (
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding">
                <Sectiontitle section={'The Couple'} />
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple2} alt="thumb" />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Chris</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple1} alt="thumb" />
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Malendy</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Couple;