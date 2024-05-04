import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

/**
   * {
   *   favorites: {
   *     '1': {id:'1', name: 'bulbasaur'},
   *     '3': {id:'3', name: 'venusaur'},
   *     '4': {id:'4', name: 'charmander'}, 
   *   }  
   * }
 */

interface PokemonState {
  favorites:  {[key: string]: SimplePokemon},
}

// const getInitialState = () => {
//   if (typeof localStorage === 'undefined') return {};
//   const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}');
//   return favorites;
// }

const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState(),
    // '1': {id:'1', name: 'bulbasaur'},
    // '3': {id:'3', name: 'venusaur'},
    // '4': {id:'4', name: 'charmander'},
    // '5': {id:'5', name: 'Charmeleon'},

}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons (state, action: PayloadAction< { [key: string]: SimplePokemon } >) {
        state.favorites = action.payload;
    },


    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
        const pokemon  = action.payload
        const { id } = pokemon;

        if (!!state.favorites[id]) {
          delete state.favorites[id];
          // return;
        } else {
          state.favorites[id] = pokemon;
        }

        //TODO: No se debe hacer en redux
        localStorage.setItem('favorites-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer