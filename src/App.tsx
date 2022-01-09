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
    <div className="App bg-neutral-200">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonDetails />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/frontside" element={<FrontSide />} />
            <Route path="/backside" element={<BackSide />} />
            <Route path=":id" element={<PokemonDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
