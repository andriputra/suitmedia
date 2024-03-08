import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero">
        <div className="ornament-top"></div>
        <div className="container">
            <div className="box-content-hero">
                <div className="box-content-hero text">
                    <h1>One more friend</h1>
                    <h3>Thousands more fun!</h3>
                    <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    <div className="box-content-hero-action">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View Intro <FontAwesomeIcon icon={faCirclePlay} /></Nav.Link>
                        <Nav.Link className="btn btn-primary" href="#!">Explore Now</Nav.Link>
                    </div>
                </div>
                <div className="box-content-hero image">
                    <img src={require('../../src/assets/img/dog-banner.png')} className="img-fluid" alt="image"/>
                </div>
            </div>
        </div>
        <div className="ornament-bottom"></div>
    </div>
  );
};

export default Hero;
