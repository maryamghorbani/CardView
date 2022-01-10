import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { Pokemon, PokemonStat } from '../pokemonDetails/pokemonAPI';
import { useAppSelector } from '../../app/hooks';
import { PokemonColor, PokemonStatColor, selectPokemon } from '../pokemonDetails/pokemonSlice';

const StatComponent = (stats: PokemonStat[] | undefined) => stats?.map((stat) => (
  <div className="relative mb-9" key={stat.name}>
    <p style={{ color: PokemonStatColor[stat.name][1] }} className="text-left text-2xl font-extrabold text-red-600 pl-7">
      {PokemonStatColor[stat.name][0]}
      {' '}
    </p>
    <ProgressBar
      className="justify-center flex items-center"
      completed={stat.value.toPrecision()}
      maxCompleted={255}
      bgColor={PokemonStatColor[stat.name][1]}
      width="80%"
      height="10px"
      baseBgColor="#f5f5f5"
      labelAlignment="outside"
      labelColor={PokemonStatColor[stat.name][1]}
      labelSize="1.5625rem"
    />
  </div>
));

export function BackSide() {
  const pokemon: Pokemon | null = useAppSelector(selectPokemon);

  return (
    <div className="w-card h-card p-24 bg-white shadow-md rounded-lg text-gray-900">
      <div className="text-center mt-2 mb-28">
        <p className="text-stone-300 text-4xl font-extrabold">
          #
          {pokemon?.id}
        </p>
        <p className="text-7xl font-black capitalize">{pokemon?.name}</p>
      </div>

      <div className="">
        {StatComponent(pokemon?.stats ?? [])}
      </div>

    </div>
  );
}
