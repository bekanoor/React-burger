import React from 'react';
import { Image } from 'react-bootstrap';

export default function HeaderMenu() {
  return (
    <div className="header">
      <div className="header__title">
        <Image src="/src/public/img/classic_cheese.jpg" />
        <div>
          <h2 className="header__title_h">♂️Right♂️ Burgers</h2>
          <h4 className="header__title_p">Бэргеры прямиком из Dungeon! </h4>
        </div>
      </div>
    </div>
  );
}
