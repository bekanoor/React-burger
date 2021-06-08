import React, {useState} from 'react';
import {Button, Image, Navbar, Nav } from 'react-bootstrap'

export default function HeaderMenu(props) {

    return (
        <div className="header">
            <div className="header__title">
                    <Image src="/src/public/img/classic_cheese.jpg" height="70px"  width="70px"/>
                    <div>
                        <h2 className="header__title_h">♂️Right♂️ Burgers</h2>
                        <h4 className="header__title_p">Бургеры прямиком из Dungeon! </h4>
                    </div>
               
            </div>
            <div className="navigation">
                <Navbar expand="lg">
                        <Navbar.Brand href="#Бэргеры">Бэргеры</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Закуски">Закуски</Nav.Link>
                            <Nav.Link href="#Десерты">Десерты</Nav.Link>
                            <Nav.Link href="#Напитки">Напитки</Nav.Link>
                            <Nav.Link href="#Контакты">Контакты</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <Button className="nav_btn" onClick={() => props.setActive(true)} variant="success">Корзина{props.basket.length === 0 ? '' : ` | ${props.basket.length}`}</Button>{' '}
                </Navbar>
            </div>
        </div>
    )
}