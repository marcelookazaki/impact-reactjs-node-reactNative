import React from 'react';
import './App.css';
import {Componente1} from './Componente1';
import { Componente2 } from './Componente2';

export default _ => (
    <div className="App">
      <header className="App-header">
          <Componente1 />
          <Componente2 />
      </header>
    </div>
  );
