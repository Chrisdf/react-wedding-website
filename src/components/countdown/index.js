import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';
import './style.css'

class Saveday extends Component {

    render() {
        return (
            <div className="saveday">
                <div className="container">
                    <div className="row">
                        <div class="col-sm-3"></div>
                        <div className="col-6">
                            <div className="countdownwrap">
                                <CountDown
                                    deadline="November 12, 2021"
                                />
                                <div className="subtitle">
                                    <h1>Until we say I do</h1></div>
                            </div>
                            <div class="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Saveday;