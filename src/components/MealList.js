import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Context } from '../context';

export default function EatList(props) {
  const { dispatch } = useContext(Context);

  const review = props.bd.map((item, index) => (
    <div className="meal-item" key={index}>
      <Image src={item.path} alt={item.path} />
      <div className="meal-item__title">{item.name}</div>
      <h4 className="meal-item__subtitle">{item.description}</h4>
      <div className="meal-items__footer">
        <div className="meal-item__price">{item.price} ₽</div>
        <div className="meal-item__button">
          <Button
            onClick={() =>
              dispatch({
                type: 'ADD_ITEM',
                payload: item,
              })
            }
            variant="danger"
          >
            Заказать
          </Button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className="section-food-title" id={props.name}>
        {props.foodType}
      </h1>
      <div className="meal-preview">{review}</div>
    </div>
  );
}
