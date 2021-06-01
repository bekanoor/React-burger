import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EatList from './eatList'
const burgers = require('./public/bd/burgers.json')
const snacks = require('./public/bd/snacks.json')

function HeaderMenu() {
    return (
        <div className="header">
            <div className="header__title">
                    <Image src="/src/public/img/burger_icon.jpg" height="70px"  width="70px"/>
                    <div>
                        <h2 className="header__title_h">♂️Right♂️ Burgers</h2>
                        <h4 className="header__title_p">Бургеры прямиком из Dungeon! </h4>
                    </div>
               
            </div>
            <div className="navigation">
                <Navbar expand="lg">
                        <Navbar.Brand href="#home">Гамбургеры</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link">Закуски</Nav.Link>
                            <Nav.Link href="#link">Десерты</Nav.Link>
                            <Nav.Link href="#link">Напитки</Nav.Link>
                            <Nav.Link href="#link">Контакты</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <Button className="nav_btn" variant="success">Корзина</Button>
                </Navbar>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className="wrapper">
            <HeaderMenu/>
            <EatList bd={burgers} foodType="Бэргеры"/>
            <EatList bd={snacks} foodType="Закуски"/>
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );