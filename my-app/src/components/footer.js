import React, { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import logo from '../putting-green-removebg-preview.png'

export default class FooterPage extends Component {
    render() {
        return (
            <div>
                {/* Social media links: https://www.websiteplanet.com/webtools/sharelink/ */}
                <footer class="bg-dark text-center text-white">
                    <div className="container p-4">
                        <h5 className="title">Share this website</h5>
                        <section className="mb-4">
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/sharer/sharer.php?u=www.thegolfgreencompany.com" role="button"
                            ><i className="fab fa-facebook-f"></i
                            ></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/intent/tweet?url=www.thegolfgreencompany.com&text=" role="button"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="https://pinterest.com/pin/create/button/?url=www.thegolfgreencompany.com&media=&description=" role="button"
                            ><i className="fab fa-pinterest"></i
                            ></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/shareArticle?mini=true&url=www.thegolfgreencompany.com" role="button"
                            ><i className="fab fa-linkedin-in"></i
                            ></a>
                        </section>

                        <section className="mb-4">
                            <p>
                                The golf green company offers top quality artificial golf greens which will undoubtably improve
                                your putting game. Take the next step in diminishing your golf handicap by getting your own personal
                                putting green.
                            </p>
                        </section>

                        <Row>
                            <h5 className="title">Links</h5>
                            <ul className="footer">
                                <li className="list-unstyled">
                                    <a href="homepage">Homepage</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="about">About</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="gallery">Gallery</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="contact">Contact</a>
                                </li>
                            </ul>
                        </Row>
                    </div>
                    
                    <img height='70' width='120' src={logo} alt="logo" />
                    <div class="text-center p-3" >
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://thegolfgreencompany.com"> thegolfgreencompany.com </a>
                    </div>

                </footer>
            </div>
        );
    }
}
