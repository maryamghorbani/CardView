import { Image } from 'antd';
import React from 'react';
import { Pokemon } from '../pokemonDetails/pokemonAPI';
import { useAppSelector } from '../../app/hooks';
import { PokemonColor, selectPokemon } from '../pokemonDetails/pokemonSlice';

const TagComponent = (tags:string[]) => tags.map((tag) => (
  <button style={{ backgroundColor: PokemonColor[tag] }} key={tag} className="inline-block rounded-lg font-semibold text-white mr-1 px-6 py-1 text-lg">
    {tag}
  </button>
));

export function FrontSide() {
  const pokemon: Pokemon|null = useAppSelector(selectPokemon);

  return (
    <div className="w-card h-card p-24 bg-white shadow-md rounded-lg text-gray-900">
      <div className="text-center mt-2">
        <p className="text-stone-300 text-4xl font-extrabold">
          #
          {pokemon?.id}
        </p>
        <p className="text-7xl font-black capitalize">{pokemon?.name}</p>
      </div>
      <div className="justify-center flex">
        <img className="" src={pokemon?.image} />
      </div>
      <div className="px-5 py-2.5 mb-5">
        {TagComponent(pokemon?.tags ?? [])}
      </div>
    </div>
  );
}
