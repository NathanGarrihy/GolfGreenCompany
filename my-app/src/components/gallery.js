import React, { Component } from 'react'
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import { Redirect } from 'react-router';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false,
            items: [],
            images: [
                {
                    original: 'https://i.gyazo.com/b3a33d5c5a30b6272729a307af2d828b.jpg',
                    thumbnail: 'https://i.gyazo.com/b3a33d5c5a30b6272729a307af2d828b.jpg',
                },
                {
                    original: 'https://i.gyazo.com/2d053f0bad179a9b3d12739e599de826.jpg',
                    thumbnail: 'https://i.gyazo.com/2d053f0bad179a9b3d12739e599de826.jpg'
                },
                {
                    original: 'https://i.gyazo.com/8115e7258de1ae8eb7685fb9b7579818.jpg',
                    thumbnail: 'https://i.gyazo.com/8115e7258de1ae8eb7685fb9b7579818.jpg'
                }
            ],
            imageCount: 0,

            // image to base64
            Base64Image: ''
        };
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    // Executes upon adding image
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            image: this.image
        }

        axios.post('api/images/', data).then(
            res => {
                console.log(res);
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

    // executes after Gallery component is mounted
    async componentDidMount() {
        const { data: items } = await axios.get('api/images/'),
            imageCount = items.filter(item => item.image).length;

        const images = this.state.images;
        this.setState({ items, imageCount, images });
    }

    render() {
        for (const [index] of this.state.items.entries()) {
            var temp = this.state.items[index].image;
            
            this.state.images = this.state.images.concat([{
                original: temp,
                thumbnail: temp,
            }])
        }


        return <div className="Gallery"><ImageGallery items={this.state.images} /></div>;
    }
}