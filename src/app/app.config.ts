import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { featureReducer } from './redux/reducers/feature.reducer';
import { provideEffects } from '@ngrx/effects';
import { PokemonEffect } from './redux/effects/pokemon.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideStore(featureReducer),
     provideEffects(PokemonEffect),
     provideHttpClient()
    ]
};
