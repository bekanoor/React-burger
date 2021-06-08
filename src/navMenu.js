import React from 'react';
import {Button, Navbar, Nav } from 'react-bootstrap' 

export default function navMenu(props) {
    return (
        <nav className='navigation__wrapper'>
            {/* <Navbar expand="lg" className='navigation'>
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
            </Navbar> */}
            <div className='navigation'>
                <div>wddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
            </div>
        </nav>
    )
}