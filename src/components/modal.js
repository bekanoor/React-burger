import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Context } from '../context';

export default function Modal({ active, basket }) {
  let sum = 0;
  const { dispatch } = useContext(Context);

  const orderAmount = () => {
    return (
      <div className="modal-order-amount">
        <div>
          Сумма заказа:&nbsp;<span className="modal-order-amount__sum">{sum} ₽</span>
        </div>
        <Button variant="warning">Оформить заказ</Button>{' '}
      </div>
    );
  };
  const basketOutput = () => {
    return basket.map((item, index) => {
      sum += item.price;
      return (
        <div key={index} className="basket-items">
          <Image src={item.path} alt={item.path} />
          <div className="basket-items__title">{item.name}</div>
          <div className="basket-items__price">{item.price}</div>
          <Button
            variant="danger"
            onClick={() =>
              dispatch({
                type: 'REMOVE_ITEM',
                payload: index,
              })
            }
          >
            ×
          </Button>
        </div>
      );
    });
  };

  return (
    <div
      className={active ? 'modal-window active' : 'modal-window'}
      onClick={() =>
        dispatch({
          type: 'SET_MODAL',
          payload: false,
        })
      }
    >
      <div className="modal-review" onClick={(e) => e.stopPropagation()}>
        <h1>Ваш заказ</h1>
        <hr />
        {
          //check on empty basket
          basket.length === 0 ? (
            <div className="empty-basket">
              <img src="/src/public/img/simple-basket.jpg" />
              <h5>
                Корзина пуста. Выберите бэргер из меню или хватит палить чужой код в час ночи.
              </h5>
            </div>
          ) : (
            basketOutput()
          )
        }
        <hr />
        {basket.length !== 0 ? orderAmount() : ''}
      </div>
    </div>
  );
}
