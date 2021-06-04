import React from 'react'
import './index.css'

export default function Modal({active, setActive, children}) {
    return (
        <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick = {e => e.stopPropagation()}>
            </div>
        </div>
    );
}