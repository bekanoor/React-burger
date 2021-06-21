import React, {useContext} from 'react'
import {Button, Image} from 'react-bootstrap'
import {Context} from './context'

export default function Modal({active, basket}) {
    let sum = 0;
    const {setModalActive, removeItem} = useContext(Context);

    const basketOutput = () => {
        return basket.map((item, index) => { 
            sum += item.price;
            return (<div key={index} className="modal__item">
                <Image src={item.path} alt={item.path}/>
                <div className="modal__item_title">{item.name}</div>
                <div className="modal__item_price">{item.price}</div>
                <Button className="modal__item_br" variant="danger" onClick={() => removeItem(index)}>×</Button>
            </div>)
        })
    }

    return (
        <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setModalActive(false)}>
            <div className='modal__content' onClick = {e => e.stopPropagation()}>
                    <h1>Ваш заказ</h1>
                    <hr/>
                    { //check on empty basket
                        basket.length === 0 ? 
                            <div className='modal_basket'>
                                <img src='/src/public/img/simple-basket.jpg'/>
                                <h5>Корзина пуста. Выберите бэргер из меню или хватит палить чужой код в час ночи.</h5>
                            </div> 
                            : basketOutput()
                    }
                    <hr/>
                    <div className="modal__item_order">
                        <div>Сумма заказа:&nbsp;</div>
                        <div className='modal__item_orderSum'>{sum} ₽</div>
                    </div>
                    <div className="modal__item_btn" >
                        <Button variant="warning">Оформить заказ</Button>{' '}
                    </div>
            </div>
        </div>
    );
}