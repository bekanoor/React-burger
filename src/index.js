import React, { useReducer, useState } from 'react';
import { Context } from './context';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './components/headerMenu.js';
import NavBar from './components/navbar';
import EatList from './components/eatList';
import Carousel from './components/carousel';
import Modal from './components/modal';
import Footer from './components/footer';
const burgers = require('./public/bd/burgers.json');
const snacks = require('./public/bd/snacks.json');
const desserts = require('./public/bd/desserts.json');
const drinks = require('./public/bd/drinks.json');

function Main() {
  const [fettle, dispatch] = useReducer(reducer, { basket: [], modalActive: false });

  return (
    <Context.Provider
      value={{
        dispatch,
      }}
    >
      <div>
        <HeaderMenu />
        <NavBar basket={fettle.basket} />
        <Carousel />
        <EatList bd={burgers} foodType="Бэргеры" name="Бэргеры" />
        <EatList bd={snacks} foodType="Закуски" name="Закуски" />
        <EatList bd={desserts} foodType="Десерты" name="Десерты" />
        <EatList bd={drinks} foodType="Напитки" name="Напитки" />
        <Modal basket={fettle.basket} active={fettle.modalActive} />
        <Footer name="Контакты" />
      </div>
    </Context.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
