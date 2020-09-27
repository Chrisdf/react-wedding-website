import React from 'react';
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';



import './style.css'

const Header = () => {

    return (
        <StickyHeader
            header={
                <div className="Header_root">
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="logo">
                                        <h2><Link to='/'>Chris & Malendy</Link></h2>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="header-menu d-lg-block d-none">
                                        <ul className="mobail-menu d-flex">
                                            <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                            <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                            <li><AnchorLink href='#story'>Story</AnchorLink></li>
                                            <li><AnchorLink href='#location'>Location</AnchorLink></li>
                                            <li><AnchorLink href='#gallery'>Engagement</AnchorLink></li>
                                            <li><AnchorLink href='#rsvp'>RSVP</AnchorLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        >
        </StickyHeader>

    )
}

export default Header;
