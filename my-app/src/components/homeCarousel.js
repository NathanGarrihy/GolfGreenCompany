import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export default class HomeCarousel extends Component {
    render() {
        return (
            <Card bg="dark">
                <Carousel >
                    <Carousel.Item>
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2020/07/img_4876.jpg"
                                alt="1st slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2018/01/dsc_0035.jpg"
                                alt="2nd slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2020/07/boots.jpg"
                                alt="3rd slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2019/08/img_4107.jpg"
                                alt="4th slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Card>
        )
    }
}