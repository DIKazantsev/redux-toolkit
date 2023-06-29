
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IRecipe } from '../../types/recipe.types';


const initialState: IRecipe[] = []


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
            const isExist = state.some((r: any) => r.id === recipe.id);

            if (isExist) {
                const index = state.findIndex((item: any) => item.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
            } else {
                state.push(recipe)
            }

        }
    }
})

export const { actions, reducer } = favoritesSlice;