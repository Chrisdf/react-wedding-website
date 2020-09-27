import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom'

const DirectionsButton = ({ radius }) =>
    <div className="btn2"><a href={directionsURL}>Directions</a></div>;

const directionsURL = "http://google.com/maps/dir/balmorhea+weddings/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8647294248d30f8f:0x5ad167740a4f7fb7?sa=X"


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 30.145008,
            lng: -95.6646957
        },
        zoom: 16
    };

    render() {
        return (
            <div style={{ height: '300px', width: '100%', display: "flex", }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAQTHFEIkbQUKKQ3Y81v1YoKJb7pY5MF70" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <DirectionsButton
                        lat={this.props.center.lat}
                        lng={this.props.center.lng - 0.003}
                    />

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;