import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const prodData = [
    {
        image: require('../assets/img/prod1.png'),
        title: 'Reflex Plus Adult Cat Food Salmon',
        type: 'Male',
        size: '326gram',
        price: '6.900.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod2.png'),
        title: 'Reflex Plus Adult Cat Food Salmon',
        type: 'Cat Food',
        size: '15Kg',
        price: '5.500.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod3.png'),
        title: 'Cat scratching ball toy kitten sisal rope ball',
        type: 'Toy',
        size: '10kg',
        price: '8.200.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod4.png'),
        title: 'Cute Pet Cat Warm Nest',
        type: 'Female',
        size: '01 year',
        price: '7.300.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod5.png'),
        title: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
        type: 'Female',
        size: '01 year',
        price: '7.300.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod6.png'),
        title: 'Costumes Fashion Pet Clother Cowboy Rider',
        type: 'Female',
        size: '01 year',
        price: '7.300.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod7.png'),
        title: 'Costumes Chicken Drumsti ck Headband',
        type: 'Female',
        size: '01 year',
        price: '7.300.000 VND',
        label: 'Free Toy & Free Shaker'
    },
    {
        image: require('../assets/img/prod8.png'),
        title: 'Plush Pet Toy',
        type: 'Female',
        size: '01 year',
        price: '7.300.000 VND',
        label: 'Free Toy & Free Shaker'
    }

];

const PetsProduct = () => {
    return (
        <section className="pets-sale">
            <div className="container">
                <div className="column-title">
                    <div className="column-title-left">
                        <p className="title-up">Hard to choose right products for your pets?</p>
                        <h4 className="title-bottom">Our Products</h4>
                    </div>
                    <div className="column-title-right hidden-xs">
                        <Nav.Link className="btn btn-outline-primary" href="#!">View More <FontAwesomeIcon icon={faChevronRight} /></Nav.Link>
                    </div>
                </div>
                <div className="box-pets-product">
                    {prodData.map((prod, index) => (
                        <div className="pets-product" key={index}>
                            <div className="pets-picture">
                                <img src={prod.image} className="img-fluid" alt={prod.title} />
                            </div>
                            <div className="pets-description">
                                <div className="title"><strong>{prod.title}</strong></div>
                                <div className="info">
                                    <span>Product: <strong>{prod.type}</strong></span>
                                    <span className="hidden-xs">.</span>
                                    <span>Size: <strong>{prod.size}</strong></span>
                                </div>
                                <div className="price"><strong>{prod.price}</strong></div>
                                <div className="label">
                                    <img src={require('../assets/img/gift.png')} alt="gift" className="img-fluid"/>
                                    <img src={require('../assets/img/dot.png')} alt="dot" className="img-fluid"/>
                                    <span><strong>{prod.label}</strong></span>
                                </div>
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

export default PetsProduct;
