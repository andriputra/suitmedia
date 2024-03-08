import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const SectionBannerOne = () => {
    return(
        <section className="cta">
            <div className="container">
                <div className="banner-cta">
                    <div className="banner-cta image">
                        <img src={require('../../src/assets/img/section-dog.png')} className="img-fluid"/>
                    </div>
                    <div className="banner-cta text">
                        <h1>One more friend</h1>
                        <h3>Thousands more fun!</h3>
                        <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className="banner-cta-action">
                            <Nav.Link className="btn btn-outline-primary" href="#!">View Intro <FontAwesomeIcon icon={faCirclePlay} /></Nav.Link>
                            <Nav.Link className="btn btn-primary" href="#!">Explore Now</Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBannerOne;
