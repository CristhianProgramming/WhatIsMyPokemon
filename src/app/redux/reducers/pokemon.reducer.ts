import { createReducer, on } from "@ngrx/store";
import * as PokemonActions from '../actions/pokemon.actions'
import { generateRamdomNum } from "../../utils/math.utils";

export const customerFeatureKeyPokemon = 'pokemons'

const initialState = {
    pokemon: {},
    pokemonsRamdom: [],
    loading: false,
    error: null,
}

const featureReducer = createReducer(
    initialState,
    on(PokemonActions.getPokemon, (state, { diff }) => ({ ...state, loading: false, pokemon: state.pokemonsRamdom[generateRamdomNum(diff + 3)] })),
    on(PokemonActions.getRamdomPokemons, (state, { pokemons }) => ({ ...state, loading: false, pokemon:{} ,pokemonsRamdom: pokemons.results })),
    on(PokemonActions.loadInfoPokemons, state => ({ ...state, loading: true })),
    on(PokemonActions.notLoadingPokemons, state => ({ ...state, error: state.error, loading: false }))
);

export function reducer(state: any | undefined, action: any) {
    return featureReducer(state, action);
}