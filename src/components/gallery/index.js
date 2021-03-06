import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/IMG_2356.jpg'
import galimg2 from '../../images/gal/IMG_2365.jpg'
import galimg3 from '../../images/gal/IMG_6529.jpg'
import galimg4 from '../../images/gal/IMG_6659.jpg'
import galimg5 from '../../images/gal/IMG_7636.jpg'
import galimg6 from '../../images/gal/IMG_7640.jpg'
import galimg7 from '../../images/gal/IMG_6601.jpg'
import galimg8 from '../../images/gal/IMG_7612.jpg'

class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding">
        <Sectiontitle section={'Our Engagement'} />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg1}
                  image={galimg1} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg2}
                  image={galimg2} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg3}
                  image={galimg3} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg4}
                  image={galimg4} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg5}
                  image={galimg5} />
              </div>
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg7}
                  image={galimg7} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg6}
                  image={galimg6} />
              </div>
              <div className="gallery-img">
                <ReactFancyBox
                  thumbnail={galimg8}
                  image={galimg8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;