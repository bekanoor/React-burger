import React from 'react';
import { Image } from 'react-bootstrap';

export default function HeaderMenu() {
  return (
    <div className="header">
      <Image src="/src/public/img/classic_cheese.jpg" />
      <div className="header__title">
        <h2>♂️Right♂️ Burgers</h2>
        <p>Бэргеры прямиком из Dungeon!</p>
      </div>
    </div>
  );
}
