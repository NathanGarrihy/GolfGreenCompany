import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from "axios";
import Login from "./login";

export default class DeleteImage extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            // isAdmin: false,
            // items: [],
            // images: [
            //     {
            //         original: 'https://picsum.photos/id/1018/1000/600/',
            //         thumbnail: 'https://picsum.photos/id/1018/250/150/',
            //     },
            //     {
            //         original: 'https://picsum.photos/id/1015/1000/600/',
            //         thumbnail: 'https://picsum.photos/id/1015/250/150/'
            //     },
            //     {
            //         original: 'https://picsum.photos/id/1019/1000/600/',
            //         thumbnail: 'https://picsum.photos/id/1019/250/150/'
            //     }
            // ],
            // image: '',
            // imageCount: 0,
            // id: ''
            items: [],
            id: ''
        };
    }

    // removes item from image database
    deleteItem(id, e) {
        axios.delete(`api/images/${id}`)
            .then(res => {
                this.setState({
                    itemDeleted: true
                });
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    componentDidMount() {
        axios.get(`api/images/`)
            .then(res => {
                const items = res.data;
                this.setState({
                    items
                });
            })
    }

    handleClick() {
        console.log('Click happened');
    }

    render() {
        let isLoggedIn = false;
        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (this.state.itemDeleted) {
            alert("The image has been Deleted from the gallery");
            this.state.itemDeleted = false;
            window.location.reload(false);
        }

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }
        if (isLoggedIn) {
            return (
                this.state.items.map((items, index) => {
                    return (
                        <div key={index}>
                            <Card style={{ width: '25rem' }}>
                                <CardImg top width="100%" src={items.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h4"><b>Index: {index}</b></CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">ID</CardSubtitle>
                                    <CardText>{items.id}</CardText>
                                    <Button color="danger" onClick={this.deleteItem.bind(this, items.id)}>Delete Image</Button>
                                </CardBody>
                            </Card>
                            <p></p>
                        </div>
                    )
                }
                ))
        }
        else {
            return (<Login/>)
        }

    }
}