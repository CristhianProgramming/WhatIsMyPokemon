export interface PokeResponse {
    id:                       number;
    name:                     string;
    order:                    number;
    sprites:                  Sprites;
}

export interface Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             any;
    versions?:          any;
    animated?:          Sprites;
}