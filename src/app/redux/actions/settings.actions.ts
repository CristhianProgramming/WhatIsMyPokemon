import { createAction ,props } from "@ngrx/store";
import { lenguajes } from "../../utils/interfaces/setting.interfaces";

const setDifficult = createAction('[Settings API] Set Difficult',props<{ difficult : number }>);
const setLenguaje = createAction('[Settings API] Set Lenguaje',props<{ lenguaje : lenguajes }>);

export {
    setDifficult,
    setLenguaje
}