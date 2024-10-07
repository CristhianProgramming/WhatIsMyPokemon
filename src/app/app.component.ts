import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPokemon, loadInfoPokemons } from './redux/actions/pokemon.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private _store: Store) {
    this._store.select((state: any) => state.pokemons).subscribe((v) => console.log(v))
  }

  ngOnInit(): void {
    this._store.dispatch(loadInfoPokemons());
  }

  selectPokemon() {
    this._store.dispatch(loadInfoPokemons())
  }

  title = 'whatIsMyPoke';
}
