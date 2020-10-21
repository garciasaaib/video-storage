import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Componente contenedor del GlobalState
import { createStore } from 'redux'; //funcion para crear el GlobalState
import App from './routes/App';
import initialState from './initialState'; //variable con la data
import reducer from './reducers'; //archivo contenedor de las funciones que mandan o traen datos del GlobalState

/*
+ biblioteca importada de metodos del state
+ estado inicial importado
+ este ultimo nos permite usar la webtool para chrome
*/
const store = createStore(
  reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
