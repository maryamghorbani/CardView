import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import components
import PokemonDetails from './features/pokemonDetails/PokemonDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App bg-neutral-200">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonDetails />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path=":id" element={<PokemonDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
