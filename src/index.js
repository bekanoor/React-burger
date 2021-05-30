import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function Main() {
    return (
        <div>
         <Image src='/src/public/pic.jpg'  size='small' />
         <img src='/src/public/pic.jpg' />
        </div>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );


