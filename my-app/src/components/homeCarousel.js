import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export default class HomeCarousel extends Component {
    render() {
        return (
            <Card bg="dark">
                <Carousel>
                    <Carousel.Item>
                        <a href="https://www.imdb.com/title/tt0119217/">
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2020/07/img_4876.jpg"
                                alt="1st slide" />
                        </a>
                        <Carousel.Caption>
                            {/* <h3>Ben Affleck and Matt Damon in Good Will Hunting</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://www.imdb.com/name/nm0000375/">
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2018/01/dsc_0035.jpg"
                                alt="2nd slide" />
                        </a>
                        <Carousel.Caption>
                            {/* <h3>Robert Downey Jr. at the MTV Movie Awards</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://www.imdb.com/name/nm0000113/">
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2020/07/boots.jpg"
                                alt="3rd slide" />
                        </a>
                        <Carousel.Caption>
                            {/* <h3>Sandra Bullock in Birdbox</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://www.imdb.com/name/nm0001618/">
                            <img
                                width="800" height="400"
                                src="https://golfgreenco.files.wordpress.com/2019/08/img_4107.jpg"
                                alt="4th slide" />
                        </a>
                        <Carousel.Caption>
                            {/* <h3>Joaquin Phoenix as Joker</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Card>
        )
    }
}