import React from 'react';
import { Context } from '../context';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMenu from './Header';
import NavBar from './NavbarMenu';
import EatList from './MealList';
import Carousel from './Carousel';
import Modal from './ModalWindow';
import Footer from './Footer';
const burgers = require('../public/bd/burgers.json');
const snacks = require('../public/bd/snacks.json');
const desserts = require('../public/bd/desserts.json');
const drinks = require('../public/bd/drinks.json');

export default function App() {
  const dispatch = useDispatch();
  const modalActive = useSelector((state) => state.modalActive);
  const basket = useSelector((state) => state.basket);

  return (
    <Context.Provider
      value={{
        dispatch,
      }}
    >
      <div>
        <HeaderMenu />
        <NavBar basket={basket} />
        <Carousel />
        <EatList bd={burgers} foodType="Бэргеры" name="Бэргеры" />
        <EatList bd={snacks} foodType="Закуски" name="Закуски" />
        <EatList bd={desserts} foodType="Десерты" name="Десерты" />
        <EatList bd={drinks} foodType="Напитки" name="Напитки" />
        <Modal basket={basket} active={modalActive} />
        <Footer name="Контакты" />
      </div>
    </Context.Provider>
  );
}
