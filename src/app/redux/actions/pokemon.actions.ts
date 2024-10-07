import { createAction, props } from "@ngrx/store";


const getPokemon = createAction('[Pokemon API] Get Pokemon', props<{name: string}>());
const getRamdomPokemons = createAction('[Pokemon API] Get Ramdom Pokemons');

export { 
    getPokemon,
    getRamdomPokemons
}