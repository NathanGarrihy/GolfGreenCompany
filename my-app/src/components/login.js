import axios from "axios";
import React, { Component } from "react";
import { Redirect } from 'react-router'
import logo from '../putting-green-removebg-preview.png'

export default class Login extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password
        }

        // Creates a post request to the database, only responds
        // When login cradentials are correct
        axios.post('api/auth/signin', data)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.username);
                localStorage.setItem('email', res.data.email);
                this.setState({
                    loggedIn: true
                });
                window.location.reload(false);
            })
            .catch(err => {
                alert("Invalid username or password, please try again.");
            });
    }

    render() {
        // makes sure user cant navigate to login page by typing /login
        if (localStorage.getItem('token') != null) {
            this.setState({
                loggedIn: true
            });
        }

        if (this.state.loggedIn) {
            return <Redirect to={'/addImage'} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <body>
                    <div className="centered">
                        <img width="150" src={logo} alt="logo" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="First name"
                            onChange={e => this.username = e.target.value} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => this.password = e.target.value} />
                    </div>

                    {/* <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div> */}

                    <button type="submit" className="btn btn-success btn-block">Login</button>
                </body>
            </form>
        );
    }
}