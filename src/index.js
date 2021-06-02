import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './headerMenu.js' 
import EatList from './eatList'
const burgers = require('./public/bd/burgers.json')
const snacks = require('./public/bd/snacks.json')

function Slider() {
    const slider = [
    '/src/public/img/slider1.jpg',
    '/src/public/img/slider2.jpeg',
    '/src/public/img/slider3.jpg',
    '/src/public/img/slider4.jpg',
    '/src/public/img/slider5.png' 
];
    
    const review = slider.map ((item, index) =>
        <img className='slider__item' src={item} height='300px' width='924'/>
    )

    return(
        <div>
            <div className='slider__wrapper'>
                <div className='slider__container'>
                    <div className='slider__track'>
                        {review}    
                    </div>
                </div>
            </div>
            <button>next</button>
            <button>prev</button>
        </div>
    )
}

function Main() {
    return (
        <div className="wrapper">
            <HeaderMenu/>
            <Slider />
            {/* <EatList bd={burgers} foodType="Бэргеры"/> */}
            {/* <EatList bd={snacks} foodType="Закуски"/> */}
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );