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
      if (parseInt(id)) {
        dispatch(fetchPokemonDetail(parseInt(id)));
      } else {
        navigate('/not-found');
      }
    } else {
      dispatch(fetchPokemonRandomly());
    }
  }, [id]);

  return (
    <div>
      <ReactCardFlip isFlipped={!showFrontSide} flipDirection="horizontal">
        <div onClick={(e) => dispatch(flipCard())}>
          <FrontSide />
        </div>

        <div onClick={(e) => dispatch(flipCard())}>
          <BackSide />
        </div>
      </ReactCardFlip>
    </div>

  );
}
export default PokemonDetails;
