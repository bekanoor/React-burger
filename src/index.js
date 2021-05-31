import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Image, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const bd = require('./public/bd/date.json')

function EatList() {
    const review = bd.map((item, index) => 
            <div className='burger__preview'>
            <Image height="277" width="277" src={item.path} alt={item.path}/>
            <div>{item.name}</div>                
            <div>{item.description}</div>                
            <div>{item.price}</div>                
            <Button variant="danger">Заказать</Button>
        </div>
    )

    return (
        <div className=''>
            {review}
        </div>
    )
}

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
            <EatList/>
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );


