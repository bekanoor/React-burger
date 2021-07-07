import React, { useState, useContext } from 'react';
import { Context } from '../context';
import { Button } from 'react-bootstrap';

export default function NavBar(props) {
  const [nav, setNav] = useState(false);
  const { dispatch } = useContext(Context);
  const changeNavbar = () => (window.scrollY > 80 ? setNav(true) : setNav(false));

  window.addEventListener('scroll', changeNavbar);

  return (
    <nav className={nav ? 'nav-menu active' : 'nav-menu'}>
      <div className="nav-menu__content">
        <ul>
          <li>
            <a className="nav-menu bold" href="#Бэргеры">
              Бэргеры
            </a>
          </li>
          <li>
            <a href="#Закуски">Закуски</a>
          </li>
          <li>
            <a href="#Десерты">Десерты</a>
          </li>
          <li>
            <a href="#Напитки">Напитки</a>
          </li>
          <li>
            <a href="#Контакты">Контакты</a>
          </li>
        </ul>
        <Button
          onClick={() =>
            dispatch({
              type: 'SET_MODAL',
              payload: true,
            })
          }
          variant="success"
        >
          Корзина{props.basket.length === 0 ? '' : ` | ${props.basket.length}`}
        </Button>{' '}
      </div>
    </nav>
  );
}
