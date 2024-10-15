import "../../styles/main.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-hero container-fluid max-content">
                <div className="footer-wrap">
                    <div className="address column">
                        <div className="address-logo">
                            <h4>ARSHA</h4>
                            <p>A108 Adam Street</p>
                        </div>
                        <div className="detail-address">
                            <p>New York, NY 535022</p>
                            <p>United States</p>
                        </div>
                        <div className="address-contact">
                            <p>
                                <strong>Phone:</strong>+1 5589 55488 55
                            </p>
                            <p>
                                <strong>Email:</strong>info@example.com
                            </p>
                        </div>
                    </div>
                    <div className="useful-link column">
                        <h4>Useful Links</h4>
                        <ul className="link-list">
                            <li className="footer-list">Home</li>
                            <li className="footer-list">About Us</li>
                            <li className="footer-list">Services</li>
                            <li className="footer-list">Terms of Service</li>
                            <li className="footer-list">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="our-services column">
                        <h4>Our Services</h4>
                        <ul className="service-list">
                            <li className="footer-list">Web Design</li>
                            <li className="footer-list">Web Development</li>
                            <li className="footer-list">Product Management</li>
                            <li className="footer-list">Marketing</li>
                            <li className="footer-list">Graphic Design</li>
                        </ul>
                    </div>
                    <div className="socmed column">
                        <h4>Our Social Networks</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div className="socmed-logos">
                            <span className="socmed-logo" />
                            <span className="socmed-logo" />
                            <span className="socmed-logo" />
                            <span className="socmed-logo" />
                            <span className="socmed-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="end-of-footer">
                <div className="eof-wrap container-fluid max-content">
                    <p>
                        © Copyright <strong>Arsha</strong>. All Rights Reserved
                    </p>
                    <p className="design-by">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
