import React,{useCallback } from 'react'
import {Button} from 'react-bootstrap'

export default function OrderBasket(props) {

    return(
        <div className="nav_btn" >
            <Button onClick={props.setActive} variant="success">Корзина{props.count === 0 ? '' : `| ${props.count}`}</Button>{' '}
        </div>
    )
}