import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { compose, createStore } from 'redux';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

render(<Main />, document.getElementById('root'));
