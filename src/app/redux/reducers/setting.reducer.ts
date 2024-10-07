import { createReducer, on } from "@ngrx/store";
import { SettingInterface } from "../../utils/interfaces/setting.interfaces";
import * as SettingActions from '../actions/settings.actions'


export const customerFeatureKey = 'Settings';

const initialState: SettingInterface = {
    difficult: 0,
    lenguaje: "SPANISH"
}

const featureReducer = createReducer<SettingInterface>(
    initialState,
    on(SettingActions.setDifficult, (state => ({ ...state, difficult: state.difficult }))),
    on(SettingActions.setLenguaje, (state => ({ ...state, lenguaje: state.lenguaje }))),
);

export function reducer(state: any | undefined, action: any) {
    return featureReducer(state, action);
}