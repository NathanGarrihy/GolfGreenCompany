import React, { Component } from 'react'
import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// const images = [{
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
// },
// {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/'
// },
// {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/'
// }]

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            isAdmin: false,
            id: '',
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
            ]
        };
    }

    componentDidMount() {
        axios.get('api/images/')
            .then((response) => {
                // this.setState({
                    console.log(response);
                    // image: response.data.image,
                    // images: [this.state.images+ {original: response.data.image, thumbnail: response.data.image}]
                // });
                console.log('image',this.state.image);
            })
            .catch((err) => {
                // Image not in database / cant reach database
                console.log(err);
            });
    }

    render() {
        return <div className="Gallery"><ImageGallery items={this.state.images} /></div>;
    }
}