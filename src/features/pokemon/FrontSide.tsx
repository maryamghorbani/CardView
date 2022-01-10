import {Pokemon} from "../pokemonDetails/pokemonAPI";
import {useAppSelector} from "../../app/hooks";
import {PokemonColor, selectPokemon} from "../pokemonDetails/pokemonSlice";
import {Image} from "antd";
import React from "react";

const TagComponent = (tags:string[]) => {
    return tags.map(tag => <button key={tag} className="inline-block rounded-lg bg-gray-400 font-semibold text-white px-6 py-1 text-lg">
        {tag} - {PokemonColor[tag]}
    </button>)
}

export function FrontSide() {

    const pokemon: Pokemon|null = useAppSelector(selectPokemon);

    return (
        <div className="w-card h-card p-24 bg-white shadow-md rounded-lg text-gray-900">
            <div className="text-center mt-2">
                <p className="text-stone-300 text-4xl font-extrabold">#{pokemon?.id}</p>
                <p className="text-7xl font-black">{pokemon?.name}</p>
            </div>
            <div className="justify-center flex">
                <Image className="" src={pokemon?.image}/>
            </div>
            <div className="px-5 py-2.5 mt-20 mb-5">
                {TagComponent(pokemon?.tags ?? [])}
            </div>
        </div>
    )
}