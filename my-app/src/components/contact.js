
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
    }

    render() {
        return (
            <div>
                <body>
                    <Container>
                        <Row>
                            <Col>
                                You can contact me by email - <b>sampleemail@gmail.com</b>
                                <br />
                                <i>or by phone number</i>
                                <br />
                                <b>0852222222</b>
                                <br /><br />
                                <u>Alternatively, you can fill out this form to send us a direct email <br /></u>
                                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                    </div>
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </body>
            </div>
        )
    }
}