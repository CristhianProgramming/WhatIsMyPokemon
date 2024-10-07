import  { customerFeatureKey , reducer as SettingReducer } from './setting.reducer'
import  { customerFeatureKeyPokemon , reducer as PokemonReducer } from './pokemon.reducer'

export const featureReducer =  {
    [customerFeatureKey] : SettingReducer,
    [customerFeatureKeyPokemon] : PokemonReducer
}