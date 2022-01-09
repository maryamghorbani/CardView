import {Pokemon} from "../pokemonDetails/pokemonAPI";
import {useAppSelector} from "../../app/hooks";
import {selectPokemon} from "../pokemonDetails/pokemonSlice";


export function FrontSide() {

    const pokemon: Pokemon|null = useAppSelector(selectPokemon);

    return (
        <div className="translate-y-full w-card h-card p-24 bg-white shadow-md rounded-lg text-gray-900">
            <div className="text-center mt-2">
                <p className="text-stone-300 text-4xl font-extrabold">#{pokemon?.id}</p>
                <p className="text-7xl font-black">{pokemon?.name}</p>
            </div>
            <div className="justify-center flex">
                <img className=""
                     src={pokemon?.image}/>
            </div>
            <div className="px-5 py-2.5 mt-20 mb-5">
                <button className="inline-block rounded-lg bg-gray-400 font-semibold text-white px-6 py-1 text-lg">Follow
                </button>
            </div>
        </div>
    )
}