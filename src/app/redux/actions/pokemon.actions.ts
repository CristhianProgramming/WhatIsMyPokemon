import { createAction, props } from "@ngrx/store";

const loadInfoPokemons = createAction('[Pokemon API] Load Information')
const getPokemon = createAction('[Pokemon API] Get Pokemon', props<{diff: number}>());
const getRamdomPokemons = createAction('[Pokemon API] Get Ramdom Pokemons',props<{pokemons : any}>());
const notLoadingPokemons = createAction('[Pokemon API] Failed loaded',props<{error:any}>())

export { 
    getPokemon,
    getRamdomPokemons,
    loadInfoPokemons,
    notLoadingPokemons
}