import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Row from "react-bootstrap/esm/Row";

export default class FooterPage extends Component {
    render() {
        return (
            // <MDBFooter color="black" className="font-small">
            //     <MDBContainer fluid className="text-center text-md-left">
            //         <MDBRow>
            //             <MDBCol md="6">
            //                 <h5 className="title">Share this page on social networks:</h5>
            //                 <div class="me-5 d-none d-lg-block">
            //                 </div>
            //                 {/* Social media links: https://www.websiteplanet.com/webtools/sharelink/ */}
            //                 <div>
            //                     <a href="https://www.facebook.com/sharer/sharer.php?u=www.thegolfgreencompany.com" class="me-4 text-reset">
            //                         <i class="fab fa-facebook-f"></i>
            //                     </a>
            //                     <a href="https://twitter.com/intent/tweet?url=www.thegolfgreencompany.com&text=" class="me-4 text-reset">
            //                         <i class="fab fa-twitter"></i>
            //                     </a>
            //                     <a href="https://pinterest.com/pin/create/button/?url=www.thegolfgreencompany.com&media=&description=" class="me-4 text-reset">
            //                         <i class="fab fa-pinterest"></i>
            //                     </a>
            //                     <a href="https://www.linkedin.com/shareArticle?mini=true&url=www.thegolfgreencompany.com" class="me-4 text-reset">
            //                         <i class="fab fa-linkedin"></i>
            //                     </a>
            //                 </div>
            //             </MDBCol>
            //             <MDBCol md="6">
            //                 <h5 className="title">Links</h5>
            //                 <ul>
            //                     <li className="list-unstyled">
            //                         <a href="homepage">Homepage</a>
            //                     </li>
            //                     <li className="list-unstyled">
            //                         <a href="about">About Us</a>
            //                     </li>
            //                     <li className="list-unstyled">
            //                         <a href="gallery">Gallery</a>
            //                     </li>
            //                     <li className="list-unstyled">
            //                         <a href="contact">Contact</a>
            //                     </li>
            //                 </ul>
            //             </MDBCol>
            //         </MDBRow>
            //     </MDBContainer>
            //     <div className="footer-copyright text-center py-3">
            //         <MDBContainer fluid>
            //             &copy; {new Date().getFullYear()} Copyright: <a href="https://thegolfgreencompany.com"> thegolfgreencompany.com </a>
            //         </MDBContainer>
            //     </div>
            // </MDBFooter>
            <div>
                {/* Social media links: https://www.websiteplanet.com/webtools/sharelink/ */}
                <footer class="bg-dark text-center text-white">
                    <div class="container p-4">
                        <h5 className="title">Share this website</h5>
                        <section class="mb-4">
                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/sharer/sharer.php?u=www.thegolfgreencompany.com" role="button"
                            ><i class="fab fa-facebook-f"></i
                            ></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://twitter.com/intent/tweet?url=www.thegolfgreencompany.com&text=" role="button"
                            ><i class="fab fa-twitter"></i
                            ></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://pinterest.com/pin/create/button/?url=www.thegolfgreencompany.com&media=&description=" role="button"
                            ><i class="fab fa-pinterest"></i
                            ></a>

                            <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/shareArticle?mini=true&url=www.thegolfgreencompany.com" role="button"
                            ><i class="fab fa-linkedin-in"></i
                            ></a>
                        </section>

                        <section class="mb-4">
                            <p>
                                The golf green company offers top quality artificial golf greens which will undoubtably improve
                                your putting game. Take the next step in diminishing your golf handicap by getting your own personal
                                golf green.
                            </p>
                        </section>

                        <Row>
                            <h5 className="title">Links</h5>
                            <ul className="footer">
                                <li className="list-unstyled">
                                    <a href="homepage">Homepage</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="about">About Us</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="gallery">Gallery</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="contact">Contact</a>
                                </li>
                            </ul>
                        </Row>
                        {/* <section class="">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 4</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 4</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 4</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section> */}
                    </div>

                    <div class="text-center p-3" >
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://thegolfgreencompany.com"> thegolfgreencompany.com </a>
                    </div>

                </footer>
            </div>
        );
    }
}
