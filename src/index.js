import React, {useState, useRef, Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './headerMenu.js' 
import EatList from './eatList'
import Carousel from './carousel'
import Modal from './modal'
const burgers = require('./public/bd/burgers.json') 
const snacks = require('./public/bd/snacks.json') 
const desserts = require('./public/bd/desserts.json')
const drinks = require('./public/bd/drinks.json')

function Main() {
    const[count, setCount] = useState(0);
    const[modalActive, setModalActive] = useState(false);

   
    function changeValueIntoBasket() {
        setCount(count + 1);
    }

    return (
        <div className="wrapper">
            <HeaderMenu  count={count} setActive={() => setModalActive(true)}/>
            {/* <Carousel/>
            <EatList bd={burgers} foodType="Бэргеры" name="Бэргеры"/>
            <EatList bd={snacks} foodType="Закуски" name="Закуски"/> */}
            {/* <EatList changeValue={() => changeValueIntoBasket()} bd={desserts} foodType="Десерты" name="Десерты"/> */}
            {/* <EatList bd={drinks} foodType="Напитки" name="Напитки"/> */}
            <Modal active={modalActive} setActive={setModalActive}>
            <p>qwdqwdqwddddddddddddddddddd</p>
            <p>qwdqwdqwddddddddddddddddddd</p>
            </Modal>
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );