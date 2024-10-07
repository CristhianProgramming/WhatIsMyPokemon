import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { PokemonService } from "../../services/pokemon.service";
import * as PokemonActions from '../actions/pokemon.actions'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class PokemonEffect{
    
    loadPokemons$ = createEffect(() => {
        return this._actions.pipe(
                ofType(PokemonActions.loadInfoPokemons),
                switchMap(() =>
                    this._pokemonService.getRamdomPokemons().pipe(
                        switchMap(pokemons => [ PokemonActions.getRamdomPokemons({ pokemons }) , PokemonActions.getPokemon({diff:0})]),
                        catchError(error => of(PokemonActions.notLoadingPokemons({ error  }))))
                    ),
                    
        );
    });

constructor(
    private readonly _actions : Actions,
    private readonly _pokemonService : PokemonService
){}

}