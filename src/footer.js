import React from 'react'

export default function Footer ({name}) {
    return( 
        <footer className='footer__'  id={name}>
            <div className='footer__wrapper'>
                <div>
                    <div className='footer__list'>
                        <ul className='footer__list_ul'>
                            <li className='footer__list_ul_item'><a href='#'>Создай свой бэргер</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Карьера</a></li>
                            <li className='footer__list_ul_item'><a href='#'>FAQ</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Блог</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Калорийность и состав</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Рагнум</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Скукнум</a></li>
                            <li className='footer__list_ul_item'><a href='#'>Доставка</a></li>
                        </ul>
                    </div>
                    <div className='footer__info'>
                        © Copyright 2021 — 5021 ООО «MAMIN BЭRGER».<br/>
                        171170, г. Пушкина, проезд Колотушкина, д. 2, строен. 2, этаж 8, пом. XV, офис 322, комн. 42<br/>
                        ОГРН: 0101000100101<br/>
                        ИНН: 0100101000<br/>
                        Все права защищены.<br/>
                        Возраст 14+
                    </div>
                </div>
                <div className='footer_socialMedia'>
                    <a href='https://vk.com/passive_voice' target='_blank'><img src='/src/public/img/vk_logo.svg'/></a>
                    <a href='https://t.me/bekanoor' target='_blank'><img src='/src/public/img/telega.svg'/></a>
                    <a href='https://www.instagram.com/sokolovdanya1/?hl=ru' target='_blank'><img src='/src/public/img/insta_logo.svg'/></a>
                </div>
            </div>
        </footer>
    )
}
