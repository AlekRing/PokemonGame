import {createSlice} from '@reduxjs/toolkit';
import firebaseClass from '../services/firebase';

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
    },
    reducers: {
        fetchPokemons: state => ({
            ...state,
            isLoading: true
        }),
        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        }),
        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoading: false,
            data: {},
            error: action.payload,
        }),
    }
})

export const { fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject } = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoading
export const selectPokemonsData = state => state.pokemons.data

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons())
    const data = await firebaseClass.getPokemons();
    dispatch(fetchPokemonsResolve);
}

export default slice.reducer;