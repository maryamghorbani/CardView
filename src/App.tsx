import React from 'react';
import logo from './logo.svg';
import { PokemonDetails } from './features/pokemonDetails/PokemonDetails';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./components";
import {FrontSide} from "./features/pokemon/FrontSide";
import {BackSide} from "./features/pokemon/BackSide";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonDetails />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/frontside" element={<FrontSide />} />
            <Route path="/backside" element={<BackSide />} />
            <Route path=":id" element={<PokemonDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>,
          <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
