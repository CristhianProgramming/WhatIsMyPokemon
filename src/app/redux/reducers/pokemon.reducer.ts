import { createReducer, on } from "@ngrx/store";
import * as PokemonActions from '../actions/pokemon.actions'


const initialState = {
    pokemon : { },
    pokemonsRamdom : [],
    loading : false,
    error : null,
}

const featureReducer = createReducer(
    initialState,
    on(PokemonActions.getPokemon, state => ({ ...state, pokemon : state.pokemon })),
    on(PokemonActions.getRamdomPokemons,state => ({ ...state , pokemon : state.pokemonsRamdom}))
);

export function reducer(state: any | undefined, action: any) {
    return featureReducer(state, action);
}