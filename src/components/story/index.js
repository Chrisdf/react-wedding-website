import React from 'react'
import { Link } from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/story/img-1.jpg'
import strory2 from '../../images/story/img-2.jpg'
import strory3 from '../../images/story/img-3.jpg'
import strory4 from '../../images/story/img-4.jpg'
import './style.css'


const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <Sectiontitle section={'Our Story'} />
            <div className="container">
                <div className="story-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Finally Talking</h3>
                                <span className="date">November 13, 2016</span>
                                <p>Before dating, we went to the same highschool, worked in the same building, and joined the same small college cohort at Lone Star. Despite all this, the first time we really talked was after a spontaneous trip to the Renaissance Festival for an extra credit class project.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our First Trip</h3>
                                <span className="date">March 12, 2017</span>
                                <p>As part of our college scholarship, the Honors Chancellor Fellows were invited to go on a trip to Italy. We spent most of the trip pretending we weren't dating, while spending every second with each other that we could.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={strory3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Our Anniversary</h3>
                                <span className="date">October 6, 2017</span>
                                <p>We were lucky enough to enjoy one of our anniversaries at the Oasis during their 30th birthday celebration. We were treated to free music, dancing and even won a contest!</p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our Engagement</h3>
                                <span className="date">Jan 22, 2018</span>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={strory4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;