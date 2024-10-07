import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects'
import { PokemonService } from "../../services/pokemon.service";


@Injectable()
export class PokemonEffect{
    

constructor(
    private readonly _action : Actions,
    private readonly _pokemonService : PokemonService
){}

}