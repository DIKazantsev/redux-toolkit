import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IRecipe } from '../../types/recipe.types';


interface IRecipeItem {
    recipe: IRecipe
}

function RecipeItem({ recipe }: IRecipeItem) {

    const favorites = useTypedSelector((state) => state.favorites)

    const { toggleFavorites } = useActions();

    console.log('favorites', favorites);
    console.log('recipe', recipe);

    const isExist = favorites.some(((r: any) => r.id === recipe.id))



    return (
        <div>
            <h2>
                {recipe.name}
            </h2>
            <button onClick={() => toggleFavorites(recipe)}>
                {isExist ? 'Remove from' : 'Add to'} favorites
            </button>


        </div >

    );
}

export default RecipeItem;
