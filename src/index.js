import React, {useState, useRef, Component,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './headerMenu.js' 
import NavBar from './navbar'
import EatList from './eatList'
import Carousel from './carousel'
import Modal from './modal'
const burgers = require('./public/bd/burgers.json') 
const snacks = require('./public/bd/snacks.json') 
const desserts = require('./public/bd/desserts.json')
const drinks = require('./public/bd/drinks.json')


function Main() {
    const[state, setState] = useState({
            modalActive: false,
            basket: [],
    })
    const {modalActive, basket} = state;
    
    function setModalActive(isActive) {
        setState({...state, modalActive: isActive})
    }
   
    function addItemToBasket(item) { 
        if(basket === null) {
            setState({...state, basket: [...basket, 'sss']})
        } else {
            setState({...state, basket: [...basket, item]})
        }
    }

    function removeItem(index) {
        let temp = basket.slice('');
        temp.splice(index, 1);
        setState({...state, basket: temp})
    }

    return (
        <div className="">
            <HeaderMenu/>
            <NavBar  basket={basket} setActive={setModalActive} />
            <Carousel/>
            <EatList bd={burgers} addItemToBasket={addItemToBasket} foodType="Бэргеры" name="Бэргеры"/>
            {/* <EatList bd={snacks} addItemToBasket={addItemToBasket} foodType="Закуски" name="Закуски"/> 
            <EatList bd={desserts} addItemToBasket={addItemToBasket} foodType="Десерты" name="Десерты"/>
            <EatList bd={drinks} addItemToBasket={addItemToBasket} foodType="Напитки" name="Напитки"/>  */}
            <Modal basket={basket}  active={modalActive} setActive={setModalActive} removeItem={removeItem}/>
            
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );