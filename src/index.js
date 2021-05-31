import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Image, Header, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function HeaderMenu() {
    return (
        <div className="header">
            <div className="header__title">
                <div className="header__title_logo" size> 
                    <Image src="/src/public/img/burger_icon.jpg" size='tiny'  />
                    <div>
                        <Header as='h2'>♂️Right♂️ Burgers</Header>
                        <Header as='h4'>Бургеры прямиком из Dungeon! </Header>
                    </div>
                </div>
                <span>Доставка бэргеров</span>
                    <a> Юпитер</a>
                    <div>
                        <p>8 800 228-13-37</p>
                        <p>Звонок платный</p>
                    </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>Гамбургеры</li>
                    <li>Закуски</li>
                    <li>Десерты</li>
                    <li>Напитки</li>
                    <li>Контакты</li>
                    <div>
                        <Button>Click Here</Button>
                    </div>
                </ul>

            </div>
        </div>

    )
}

function Main() {
    return (
        <div>
         <Image src='/src/public/pic.jpg'  size='small' />
        </div>
    );
}

ReactDOM.render(
    <HeaderMenu />,
    document.getElementById('root')
  );


