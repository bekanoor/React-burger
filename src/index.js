import React, {useReducer, useState} from 'react'
import {Context} from './context'
import ReactDOM from 'react-dom'
import reducer from './reducer'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderMenu from './headerMenu.js' 
import NavBar from './navbar'
import EatList from './eatList'
import Carousel from './carousel'
import Modal from './modal'
import Footer from './footer'
const burgers = require('./public/bd/burgers.json') 
const snacks = require('./public/bd/snacks.json') 
const desserts = require('./public/bd/desserts.json')
const drinks = require('./public/bd/drinks.json')

function init (state) {
    return state;
}

function Main() {
    const [fettle, dispatch] = useReducer(reducer, {basket: []}, init)
    const[state, setState] = useState({
            modalActive: false,
            basket: [],
    })
    const {modalActive, basket} = state;
    
    function setModalActive(isActive) {
        setState({...state, modalActive: isActive})
    }
   
    function addItemToBasket(item) { 
        // setState({...state, basket: [...basket, item]})
        dispatch({
            type: 'addItem',
            payload: item    
        })
    }

    function removeItem(index) {
        let temp = basket.slice('');
        temp.splice(index, 1);
        setState({...state, basket: temp})
    }

    return (
        <Context.Provider value={{
            setModalActive, removeItem, dispatch
        }}>
            <div>
                <HeaderMenu/>
                <NavBar  basket={fettle.basket} setActive={setModalActive} />
                <Carousel/>
                <EatList bd={burgers} foodType="Бэргеры" name="Бэргеры"/>
                <EatList bd={snacks} foodType="Закуски" name="Закуски"/> 
                <EatList bd={desserts} foodType="Десерты" name="Десерты"/>
                <EatList bd={drinks} foodType="Напитки" name="Напитки"/> 
                <Modal basket={basket}  active={modalActive} />
                <Footer name="Контакты"/>
            </div>
        </Context.Provider>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );