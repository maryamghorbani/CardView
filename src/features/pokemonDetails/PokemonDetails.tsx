import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPokemonDetail,
  selectPokemon,
  fetchPokemonRandomly, selectFrontSide,
    flipCard,
} from './pokemonSlice';
import styles from './PokemonDetails.module.css';
import {Pokemon} from "./pokemonAPI";

export function PokemonDetails() {
  const {id} = useParams();
  let navigate = useNavigate()
  const pokemon: Pokemon|null = useAppSelector(selectPokemon);
  const showFrontSide: boolean = useAppSelector(selectFrontSide);
  const dispatch = useAppDispatch();
  //TODO: handle status 404
  useEffect(() => {
    if(id) {
      if(parseInt(id)){
        dispatch(fetchPokemonDetail(parseInt(id)))
      }else{
        navigate('/not-found')
      }
    }else{
      dispatch(fetchPokemonRandomly())
    }
  }, [id])

  return (
    <div>
      <div className={styles.row}>
        <div>{pokemon?.name}</div>
        <div>{pokemon?.image}</div>
        <div>{pokemon?.id}</div>
        <button
            className={styles.button}
            onClick={() => dispatch(flipCard())}
        >
          {showFrontSide ? 'Show Back' : 'Show Front'}
        </button>
      </div>
    </div>
  );
}
