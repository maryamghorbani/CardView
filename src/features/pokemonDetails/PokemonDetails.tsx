import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import ReactCardFlip from 'react-card-flip';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchPokemonDetail,
  selectPokemon,
  fetchPokemonRandomly, selectFrontSide,
    flipCard,
} from './pokemonSlice';
import styles from './PokemonDetails.module.css';
import {Pokemon} from "./pokemonAPI";
import {FrontSide} from "../pokemon/FrontSide";
import {BackSide} from "../pokemon/BackSide";

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
      <div className={styles.row}>
        <ReactCardFlip isFlipped={!showFrontSide} flipDirection="horizontal">
          <div onClick={e => dispatch(flipCard())}>
            <FrontSide />
          </div>

          <div onClick={e => dispatch(flipCard())}>
            <BackSide />
          </div>
        </ReactCardFlip>
      </div>

  );
}
