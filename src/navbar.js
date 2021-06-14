import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Button, Navbar, Nav } from 'react-bootstrap' 

export default function NavBar(props) {
    const [nav, setNav] = useState(false);

    const changeNavbar = () => window.scrollY > 80 ? setNav(true) : setNav(false)

    window.addEventListener('scroll',  changeNavbar)

    return (
        <nav className= {nav ? 'navbar__ active' : 'navbar__'}>
            <Navbar expand="lg" className='navbar__content'>
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
                        <Button 
                        className="nav_btn" 
                        onClick={() => props.setActive(true)} 
                        variant="success">
                            Корзина{props.basket.length === 0 ? '' : ` | ${props.basket.length}`}
                        </Button>{' '}
            </Navbar>
        </nav>
    )
}