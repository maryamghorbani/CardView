import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchDetail, fetchRandomly, Pokemon } from './pokemonAPI';

export interface PokemonState {
  value: Pokemon | null;
  status: 'idle' | 'loading' | 'failed';
  show: 'backside' | 'frontside';
}

const initialState: PokemonState = {
  value: null,
  status: 'idle',
  show: 'frontside',
};

export const PokemonStatColor: { [key: string]: string[] } = {
  hp: ['HP', '#FF5959'],
  attack: ['Attack', '#F5AC78'],
  defense: ['Defense', '#FAE078'],
  'special-attack': ['Sp.Atk', '#9DB7F5'],
  'special-defense': ['Sp.Def', '#A7DB8D'],
  speed: ['Speed', '#FA92B2'],
};

export const PokemonColor: { [key: string]: string } = {
  normal: '#929DA3',
  fire: '#FF9D55',
  ground: '#D97845',
  ghost: '#5269AD',
  steel: '#5A8EA2',
  dragon: '#0B6DC3',
  fairy: '#EC8FE6',
  psychic: '#FA7179',
  dark: '#5A5465',
  rock: '#C5B78C',
  bug: '#ABB642',
  water: '#5090D6',
  grass: '#63BC5A',
  electric: '#F4D23C',
  ice: '#73CEC0',
  fighting: '#CE416B',
  flying: '#8FA9DE',
  poison: '#AA6BC8',
};

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchData',
  async (id: number) => await fetchDetail(id)
);

export const fetchPokemonRandomly = createAsyncThunk(
  'pokemon/fetchData',
  async () => await fetchRandomly()
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    backside: (state) => {
      state.show = 'backside';
    },
    frontside: (state) => {
      state.show = 'frontside';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchPokemonDetail.rejected, (state) => {
        state.status = 'failed';
        state.value = null;
      });
  },
});

export const { backside, frontside } = pokemonSlice.actions;

export const selectPokemon = (state: RootState) => state.pokemon.value;
export const selectFrontSide = (state: RootState) =>
  state.pokemon.show === 'frontside';

export const flipCard = (): AppThunk => (dispatch, getState) => {
  const currentShow = getState().pokemon.show;

  if (currentShow === 'frontside') {
    dispatch(backside());
  } else {
    dispatch(frontside());
  }
};

export default pokemonSlice.reducer;
