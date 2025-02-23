import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleCounter from './componentes/SimpleCounter.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

let contador = 0;

setInterval(() => {
    const seis = Math.floor(contador / 100000);
    const cinco = Math.floor(contador / 10000);
    const cuatro = Math.floor(contador / 1000);
    const tres = Math.floor(contador / 100);
    const dos = Math.floor(contador / 10);
    const uno = Math.floor(contador / 1);
    contador++;

    root.render(
        <SimpleCounter unidad={uno} decena={dos} centena={tres} unidadMil={cuatro} unidadDiezMil={cinco} unidadCienMil={seis} />
    );
}, 1000);

reportWebVitals();
