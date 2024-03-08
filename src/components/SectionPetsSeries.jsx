import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const petsData = [
    {
        image: require('../assets/img/pets1.png'),
        title: 'MO231 - Pomeranian White',
        genre: 'Male',
        age: '02 months',
        price: '6.900.000 VND'
    },
    {
        image: require('../assets/img/pets2.png'),
        title: 'AB542 - Siamese Cat',
        genre: 'Female',
        age: '03 months',
        price: '5.500.000 VND'
    },
    {
        image: require('../assets/img/pets3.png'),
        title: 'KL976 - Labrador Retriever',
        genre: 'Male',
        age: '05 months',
        price: '8.200.000 VND'
    },
    {
        image: require('../assets/img/pets4.png'),
        title: 'XY309 - Persian Cat',
        genre: 'Female',
        age: '01 year',
        price: '7.300.000 VND'
    },
    {
        image: require('../assets/img/pets5.png'),
        title: 'XY309 - Persian Cat',
        genre: 'Female',
        age: '01 year',
        price: '7.300.000 VND'
    },
    {
        image: require('../assets/img/pets6.png'),
        title: 'XY309 - Persian Cat',
        genre: 'Female',
        age: '01 year',
        price: '7.300.000 VND'
    },
    {
        image: require('../assets/img/pets7.png'),
        title: 'XY309 - Persian Cat',
        genre: 'Female',
        age: '01 year',
        price: '7.300.000 VND'
    },
    {
        image: require('../assets/img/pets8.png'),
        title: 'XY309 - Persian Cat',
        genre: 'Female',
        age: '01 year',
        price: '7.300.000 VND'
    }

];

const PetsSection = () => {
    return (
        <section className="pets-sale">
            <div className="container">
                <div className="column-title">
                    <div className="column-title-left">
                        <p className="title-up">Whats new?</p>
                        <h4 className="title-bottom">Take a look at some of our pets</h4>
                    </div>
                    <div className="column-title-right hidden-xs">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View More <FontAwesomeIcon icon={faChevronRight} /></Nav.Link>
                    </div>
                </div>
                <div className="box-pets-product">
                    {petsData.map((pet, index) => (
                        <div className="pets-product" key={index}>
                            <div className="pets-picture">
                                <img src={pet.image} className="img-fluid" alt={pet.title} />
                            </div>
                            <div className="pets-description">
                                <div className="title"><strong>{pet.title}</strong></div>
                                <div className="info">
                                    <span>Genre: <strong>{pet.genre}</strong></span>
                                    <span className="hidden-xs">.</span>
                                    <span>Age: <strong>{pet.age}</strong></span>
                                </div>
                                <div className="price"><strong>{pet.price}</strong></div>
                            </div>
                        </div>
                    ))}
                    <div className="column-title-right show-xs">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View More <FontAwesomeIcon icon={faChevronRight} /></Nav.Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetsSection;
