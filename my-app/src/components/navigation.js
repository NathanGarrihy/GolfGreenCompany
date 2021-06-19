import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../putting-green-removebg-preview.png'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary bg-dark fixed-top">
                <div className="container">
                    <h1 className="navbar-brand" to={"/homepage"}><b>The Golf Green Company</b></h1>
                    <img height='70' width='120' src={logo} alt="logo" />
                    <div className="collapse navbar-collapse">
                        <Link className="App-link" to={"/homepage"}>Home</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <Link className="App-link" to={"/about"}>About Us</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <Link className="App-link" to={"/gallery"}>Gallery</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <Link className="App-link" to={"/contact"}>Contact Us</Link>
                    </div>
                </div>
            </nav>
        )
    }
}