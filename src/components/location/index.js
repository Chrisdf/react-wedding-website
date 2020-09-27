import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/chapel.jpg'
import strory2 from '../../images/events/cocktail.png'
import strory3 from '../../images/events/reception.png'
import Map from "../maps";

import './style.css'

const directionsURL = "http://google.com/maps/dir/balmorhea+weddings/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8647294248d30f8f:0x5ad167740a4f7fb7?sa=X"

const Location = () => {
    return (
        <div id="location" className="event-section section-padding">
            <Sectiontitle section={'When & Where'} />
            <div className="dir-btn"><a href={directionsURL}>Directions</a></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tabs-site-button">
                            <div className="event-tabs">
                                <div className="col-md-12 col-12">
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Wedding Ceremony</h3>
                                                    <span>2:00PM - 3:30PM</span>
                                                    <p>The wedding ceremony will take place at the Chapel inside of the venue. Please arrive thirty minutes to an hour before, to give yourself time to meet with others and get familiar with the area.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text event-text-2">
                                                    <h3>Cocktail Hour</h3>
                                                    <span>4:00PM - 5:00PM</span>
                                                    <p>The cocktail hour will take place directly after the ceremony, and allow the bride and groom time to take pictures. Drinks will be provided!</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory2} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-wrap">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-12 col-12">
                                                <div className="event-img">
                                                    <img src={strory3} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-12 col-12">
                                                <div className="event-text">
                                                    <h3>Reception</h3>
                                                    <span>5:00PM - 12:00AM</span>
                                                    <p>The reception will take place inside the reception hall on premesis. Dinner will be provided, and drinks will continue being served until 11:00 PM.</p>
                                                </div>
                                            </div>
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
export default Location;