import React, {useState, useRef, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './headerMenu.js' 
import EatList from './eatList'
import Carousel from './carousel'
const burgers = require('./public/bd/burgers.json') 
const snacks = require('./public/bd/snacks.json') 
const desserts = require('./public/bd/desserts.json')
const drinks = require('./public/bd/drinks.json')

function Main() {
    return (
        <div className="wrapper">
            <HeaderMenu/>
            <Carousel/>
            <EatList bd={burgers} foodType="Бэргеры" name="Бэргеры"/>
            <EatList bd={snacks} foodType="Закуски" name="Закуски"/>
            <EatList bd={desserts} foodType="Десерты" name="Десерты"/>
            <EatList bd={drinks} foodType="Напитки" name="Напитки"/>
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );