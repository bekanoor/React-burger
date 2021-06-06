import React from 'react'
import './index.css'
import {Button, Image} from 'react-bootstrap'

export default function Modal({active, setActive, basket, removeItem}) {
    let sum = 0;
    
    return (
        <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick = {e => e.stopPropagation()}>
                    <h1>Ваш заказ</h1>
                    <hr/>
                    {
                        basket.map((item, index) => {
                            sum += item.price;
                            return (<div key={index} className="modal__item">
                                <Image src={item.path} alt={item.path}/>
                                <div className="modal__item_title">{item.name}</div>
                                <div className="modal__item_price">{item.price}</div>
                                <Button className="modal__item_br" variant="danger" onClick={() => removeItem(index)}>×</Button>
                            </div>)
                        })
                    }
                    <hr/>
                    <div className="modal__item_order">
                        <div>Сумма заказа:&nbsp;</div>
                        <div>{sum} ₽</div>
                    </div>
                    <div className="modal__item_btn" >
                        <Button variant="warning">Оформить заказ</Button>{' '}
                    </div>
            </div>
        </div>
    );
}