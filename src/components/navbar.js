import React, { useState, useContext } from 'react';
import { Context } from '../context';
import { Button } from 'react-bootstrap';

export default function NavBar(props) {
  const [nav, setNav] = useState(false);
  const { dispatch } = useContext(Context);
  const changeNavbar = () => (window.scrollY > 80 ? setNav(true) : setNav(false));

  window.addEventListener('scroll', changeNavbar);

  return (
    <nav className={nav ? 'navbar__ active' : 'navbar__'}>
      <div className="navbar__content">
        <ul>
          <li>
            <a className="navbar__content_bold" href="#Бэргеры">
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
          className="nav_btn"
          onClick={() =>
            dispatch({
              type: 'ADD_MODAL_ACTIVE',
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
