import ProgressBar from "@ramonak/react-progress-bar";
import {Pokemon} from "../pokemonDetails/pokemonAPI";
import {useAppSelector} from "../../app/hooks";
import {selectPokemon} from "../pokemonDetails/pokemonSlice";

export function BackSide() {

    const pokemon: Pokemon|null = useAppSelector(selectPokemon);

    return (
        <div className="w-card h-card p-24 bg-white shadow-md rounded-lg text-gray-900">
            <div className="text-center mt-2 mb-28">
                <p className="text-stone-300 text-4xl font-extrabold">#{pokemon?.id}</p>
                <p className="text-7xl font-black">{pokemon?.name}</p>
            </div>

            <div className="">
                <div className="relative mb-9">
                    <p className="text-left text-2xl font-extrabold text-red-600 pl-7">HP</p>
                    <ProgressBar className="justify-center flex items-center" completed="45" maxCompleted={255} bgColor="#ff4545" width="80%" height="10px" baseBgColor="#f5f5f5" labelAlignment="outside" labelColor="#ff4545" labelSize="1.5625rem" />
                </div>
                <div className="relative mb-9">
                    <p className="text-left text-2xl font-extrabold text-red-600 pl-7">HP</p>
                    <ProgressBar className="justify-center flex items-center" completed="45" maxCompleted={255} bgColor="#ff4545" width="80%" height="10px" baseBgColor="#f5f5f5" labelAlignment="outside" labelColor="#ff4545" labelSize="1.5625rem" />
                </div>
            </div>

        </div>
    )
}