import React from 'react';
import gta1 from '../../images/gta/uber-lyft.jpg'
import gta2 from '../../images/gta/atire.png'
import Sectiontitle from '../section-title'
import './style.css'



const Getting = () => {
    return (
        <div className="gta-area section-padding">
            <Sectiontitle section={'Extra Information'} />
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-8 offset-md-2">
                        <div className="row">
                            <div className="heading col-md-12 col-sm-6">
                                <h4>Transportation</h4>
                                <div className="gta-content">
                                    <p>Because the venue is a twenty minute drive from The Woodlands, we are leaving it up to each guest to provide their own transportation. If possible, please Uber/Lyft to reduce the number of parked cars and allow you to enjoy the night fully.</p>
                                </div>
                                <div className="gta-img">
                                    <img src={gta1} alt="" />
                                </div>
                            </div>
                            <div className="heading heading-2 col-md-12 col-sm-6">
                                <h4>Dress Code</h4>
                                <div className="gta-content">
                                    <p>The dress code is formal attire / black tie optional. Men can wear a formal dark suit and tie, and women can wear long evening dresses of formal cocktail-length dresses.</p>
                                </div>
                                <div className="gta-img">
                                    <img src={gta2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getting;