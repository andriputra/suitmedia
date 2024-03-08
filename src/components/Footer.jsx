import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import SubscribeForm from '../components/SubscribeForm';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <SubscribeForm/>
                    <div className="footer-up">
                        <ul className="list-unstyled">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Category</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                        <ul className="list-unstyled brand">
                            <li><a href="#!"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        </ul>
                    </div>

                    <div className="footer-copyright hidden-xs">
                        <div className="footer-copyright-item">© {this.state.currentYear} Monito. All rights reserved.</div>
                        <div className="footer-copyright-item">
                            <img src={require('./../assets/img/logo.png')} alt="Deskripsi Gambar" />
                        </div>
                        <div className="footer-copyright-item list-policy">
                            <a href="#!">Terms of Service</a>
                            <a href="#!">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="footer-copyright text-center hidden-lg">
                        <div className="footer-copyright-item">
                            <img src={require('./../assets/img/logo.png')} alt="Deskripsi Gambar" />
                        </div>
                        <div className="footer-copyright-item list-policy">
                            <a href="#!">Terms of Service</a>
                            <a href="#!">Privacy Policy</a>
                        </div>
                        <div className="footer-copyright-item">© {this.state.currentYear} Monito. All rights reserved.</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
