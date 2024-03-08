import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const SectionBannerTwo = () => {
    return(
        <section className="cta two">
            <div className="container">
                <div className="banner-cta">
                    <div className="banner-cta text">
                        <h1>Adoption <Image src={require('../../src/assets/img/paw-kick.png')} className="img-fluid" alt="paw kick"/></h1>
                        <h3>We need help. so do they.</h3>
                        <p>Adopt a pet and give it a home, it will be love you back unconditionally.</p>
                        <div className="banner-cta-action">
                            <Nav.Link className="btn btn-outline-primary" href="#!">View Intro <FontAwesomeIcon icon={faCirclePlay} /></Nav.Link>
                            <Nav.Link className="btn btn-primary" href="#!">Explore Now</Nav.Link>
                        </div>
                    </div>
                    <div className="banner-cta image">
                        <Image src={require('../../src/assets/img/hand-dog.png')} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBannerTwo;
