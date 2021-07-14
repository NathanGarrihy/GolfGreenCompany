import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../putting-green-removebg-preview.png'

export default class Navigation extends Component {
    render() {
        return (
            <div className="Nav">
                <nav className="navbar navbar-expand-lg navbar-primary bg-dark fixed-top">
                    <div className="container">
                        <h1 className="navbar-brand" to={"/homepage"}><b>The Golf Green Company</b></h1>
                        <img height='70' width='120' src={logo} alt="logo" />
                        <div className="collapse navbar-collapse">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <Link className="App-link" to={"/homepage"}>Home</Link>

                            <Link className="App-link" to={"/about"}>About</Link>

                            <a href="gallery">Gallery</a>

                            <Link className="App-link" to={"/contact"}>Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}