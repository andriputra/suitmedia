import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Partner = () => {
    return (
        <section className="partner">
            <div className="container">
                <div className="column-title">
                    <div className="column-title-left">
                        <span className="title-up">Proud to be part of</span>
                        <h4 className="title-bottom">Pet Sellers</h4>
                    </div>
                    <div className="column-title-right hidden-xs">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View all our sellers <FontAwesomeIcon icon={faChevronRight} /></Nav.Link>
                    </div>
                </div>
                <div className="box-partner-product">
                    <Image src={require('../assets/img/part1.png')} alt="partner image 1" className="img-fluid"/>
                    <Image src={require('../assets/img/part2.png')} alt="partner image 2" className="img-fluid"/>
                    <Image src={require('../assets/img/part3.png')} alt="partner image 3" className="img-fluid"/>
                    <Image src={require('../assets/img/part4.png')} alt="partner image 4" className="img-fluid"/>
                    <Image src={require('../assets/img/part5.png')} alt="partner image 5" className="img-fluid"/>
                    <Image src={require('../assets/img/part6.png')} alt="partner image 6" className="img-fluid"/>
                    <Image src={require('../assets/img/part7.png')} alt="partner image 7" className="img-fluid"/>
                </div>
            </div>
        </section>
    );
};

export default Partner;
