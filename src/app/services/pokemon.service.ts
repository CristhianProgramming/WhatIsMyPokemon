import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingInterface } from '../utils/interfaces/setting.interfaces';
import { Store } from '@ngrx/store';
import { generateRamdomNum } from '../utils/math.utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  private actualDifficult : number = 0;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _store : Store<any>
  ) { 
    this._store.select(state=>state.settings).subscribe((data:SettingInterface)=>{
      this.actualDifficult = data.difficult
    })
  }

    getPokemonByName(name: string) {
      return this._httpClient.get(`${this.baseUrl}/${name}`)
    }

    getRamdomPokemons(){
      return this._httpClient.get(`${this.baseUrl}?limit=${3 + this.actualDifficult}&offset=${generateRamdomNum(1000)}`)
    }

}
