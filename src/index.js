import React, {useState, useRef, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './headerMenu.js' 
import EatList from './eatList'
import Carousel from './carousel'

function Main() {
    return (
        <div className="wrapper">
            <HeaderMenu/>
            <Carousel/>
            {/* <EatList bd={burgers} foodType="Бэргеры"/> */}
            {/* <EatList bd={snacks} foodType="Закуски"/> */}
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );