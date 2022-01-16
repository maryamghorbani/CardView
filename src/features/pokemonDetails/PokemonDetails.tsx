import React, { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import ReactCardFlip from 'react-card-flip';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  fetchPokemonDetail,
  fetchPokemonRandomly, selectFrontSide,
  flipCard,
} from './pokemonSlice';

// import components
import FrontSide from '../pokemon/FrontSide';
import BackSide from '../pokemon/BackSide';

function PokemonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const showFrontSide: boolean = useAppSelector(selectFrontSide);
  const dispatch = useAppDispatch();
  // TODO: handle status 404
  useEffect(() => {
    if (id) {
      if (parseInt(id, 10)) {
        dispatch(fetchPokemonDetail(parseInt(id, 10)));
      } else {
        navigate('/not-found');
      }
    } else {
      dispatch(fetchPokemonRandomly());
    }
  }, [id]);

  const flippHandler = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    dispatch(flipCard());
  };

  return (
    <div>
      <ReactCardFlip isFlipped={!showFrontSide} flipDirection="horizontal">
        <div onClick={flippHandler} onKeyDown={flippHandler} role="button" tabIndex={0}>
          <FrontSide />
        </div>
        <div onClick={flippHandler} onKeyDown={flippHandler} role="button" tabIndex={0}>
          <BackSide />
        </div>
      </ReactCardFlip>
    </div>

  );
}
export default PokemonDetails;
