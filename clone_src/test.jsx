import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <img src='/src/public/img/slider1.jpg' />
        <img src='/src/public/img/slider1.jpg' />
        <img src='/src/public/img/slider1.jpg' />
      </Carousel>
    );
  }
}