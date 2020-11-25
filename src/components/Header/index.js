import React from 'react';
import { Link } from 'react-router-dom'
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
                                            <li><Link to='/'>Home</Link></li>
                                            <li><Link to='/story'>Our Story</Link></li>
                                            <li><Link to='/engagement'>Engagement</Link></li>
                                            <li><Link to='/details'>Wedding Details</Link></li>
                                            <li><Link to='/rsvp'>RSVP</Link></li>
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
