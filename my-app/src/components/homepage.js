import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import logo from '../putting-green-removebg-preview.png'

// Home page
export default class Homepage extends Component {
    render() {
        return (
            <div>
                <body>
                    <Container>
                        <Row>
                            <Col>
                                The Golf Green Company designs, builds and maintains artificial golf greens. If you have any questions in relation to artificial or synthetic golf greens then please feel free to <Link className="App-link" to={"/contact"}>Contact Us.</Link>
                                We aim to cut through the rubbish that is advertised on the internet about artificial putting greens and provide a service that is reliable and affordable.
                                <img src={logo} height='250' />
                            </Col>
                            <Col>
                                If you are currently considering investing in an artificial golf green, be advised of the following:
                                <ul>
                                    <li>They are extremely costly to install</li>
                                    <li>The golf green will require annual professional maintenance</li>
                                    <li>There are a wide variety of materials/surfaces available which may or may not suit your specific needs depending on how you envisage using your golf green</li>
                                    <li>You need to be extremely careful of where you have your golf green installed and a huge amount of factors can impact its longevity</li>
                                    <li>I have seen some maintenance clients completely regret the decision to install their putting green as at the time they were unaware of the ongoing costs and having their installer build the green in an unsuitable location</li>
                                    <li>While I don’t want to discourage you from having an artificial putting green it would be wrong of me not to outline the potential problems associated with them</li>
                                </ul>
                                More than happy to share my experience with anyone seriously interested and willing for you to see and discuss some of my clients
                            </Col>
                        </Row>
                        <Row>
                            {/* Video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LaAqHvJFihE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <Col>
                                <b>Other important information</b><br />
                                None yet. There could potentially be some text here to fill out the page and provide some important information to the user.
                            </Col>
                        </Row>
                    </Container>
                </body>
            </div>
        )
    }
}