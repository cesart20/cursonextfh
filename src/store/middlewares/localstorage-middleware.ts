import { MiddlewareAPI, Dispatch, Action } from "@reduxjs/toolkit";
import { RootState } from "..";


export const localStorageMiddleware = (state: MiddlewareAPI)=> {
    return (next: Dispatch) => (action: Action) => {
        // console.log({state: state.getState()});
        next(action);

        if (action.type === 'pokemons/toggleFavorite') {
            const {pokemons} = state.getState() as RootState;
            localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
            return;
        }
    }
}