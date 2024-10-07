import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingInterface } from '../utils/interfaces/setting.interfaces';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  private actualDifficult : number = 0;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _store : Store<{setting:SettingInterface}>
  ) { 
    this._store.select('setting').subscribe((data:SettingInterface)=>{
      this.actualDifficult = data.difficult * 3;
    })
  }

    getPokemonByName(name: string) {
      return this._httpClient.get(`${this.baseUrl}/${name}`)
    }

    getRamdomPokemons(){
      return this._httpClient.get(`${this.baseUrl}?limit=${3 + this.actualDifficult}`)
    }

}
