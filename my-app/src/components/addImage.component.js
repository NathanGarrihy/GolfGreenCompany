import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Redirect } from "react-router";
import axios from "axios";
import Login from "./login";

export default class AddImage extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false,
            items: [],
            image: '',
            images: [
                {
                    original: 'https://picsum.photos/id/1018/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1018/250/150/',
                },
                {
                    original: 'https://picsum.photos/id/1015/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1015/250/150/'
                },
                {
                    original: 'https://picsum.photos/id/1019/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1019/250/150/'
                }
            ],
            imageCount: 0,

            // image to base64
            Base64Image: ''
        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Executes upon adding image
    handleSubmit = e => {
        console.log('in here')
        e.preventDefault();

        const data = {
            image: this.image
        }

        axios.post('api/images', data).then(
            res => {
                console.log("SUCCESS!", res);
                this.setState({
                    itemAdded: true
                });
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    // Takes in a file from the system explorer
    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    // Converts the image file to a base64 string
    handleImageChange(e) {
        alert(e.target.files[0]);
        this.getBase64(e.target.files[0], (base64) => {
            this.setState({ Base64Image: base64 });
            this.image = base64;
        })
    }

    render() {
        let isLoggedIn = false;
        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (this.state.itemAdded) {
            alert("This image has been added to the gallery");
            this.state.itemAdded = false;
            return <Redirect to={'/addImage'} />
        }

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }


        return (
            <div>
                {isLoggedIn && (
                    <Card bg="dark">
                        <form onSubmit={this.handleSubmit}>
                            <br />
                            <label>Image Upload</label>
                            <br /><br />
                            <input
                                type='file'
                                className='form-control'
                                onChange={this.handleImageChange}
                                required={true}
                            ></input>
                            <br />
                            <button type="submit" className="btn btn-success">Add selected Image</button>
                            <h1>or</h1>
                        </form>
                        <a href="/deleteImage">
                            <button className="btn btn-warning">Go To Delete an Image</button>
                        </a>
                    </Card>
                )}
                {!isLoggedIn && (
                    <Login />
                )}
            </div>
        )
    }
}

{/* * Only allow image upload for admin * */ }