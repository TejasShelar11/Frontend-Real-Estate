import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-2 mb-4">
                        <h5 >Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="links">Home</Link></li>
                            <li><Link to="/about" className="links">About Us</Link></li>
                            <li><Link to="/contact" className="links">Contact Us</Link></li>
                            <li><Link to="/FAQ" className="links">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h5 >Categories</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/apartment" className="links">Apartment</Link></li>
                            <li><Link to="/villa" className="links">Villa</Link></li>
                            <li><Link to="/house" className="links">House</Link></li>
                            <li><Link to="/office" className="links"> Office</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-4">
                        <h5 >Legal</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/privacypolicy" className="links">Privacy Policy</Link></li>
                            <li><Link to="/testimonials" className="links">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 >Mail Us:</h5>
                        <p>RealEstate@rs.com</p>
                        <div className="icon-container">
                            <i className="fa fa-whatsapp icon" style={{ fontSize: '24px' }}></i>
                            <i className="fa fa-instagram icon" style={{ fontSize: '24px' }}></i>
                            <i className="fa fa-twitter-square icon" style={{ fontSize: '24px' }}></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 >Registered Address</h5>
                        <p>
                            Pune, Hinjewadi Phase 1, Maharashtra
                        </p>
                    </div>
                    <div className="col-12">
                        <hr className="footer-hr"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="footer-text">© {new Date().getFullYear()} Real Esate. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>



    );
};

export default Footer;
