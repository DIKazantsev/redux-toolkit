import { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../../types/recipe.types';

const defaultValue: IRecipeData = {
    name: ''
}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState(defaultValue);

    const [createRecipe] = useCreateRecipeMutation();





    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handleSubmit recipe', recipe);
        createRecipe(recipe).then(() => {
            setRecipe({ name: '' })
        })

    }


    return <div>
        <form onSubmit={handleSubmit}>
            <p>Create new recipe:</p>
            <label>
                <input
                    type='text'
                    placeholder='name'
                    value={recipe.name}
                    onChange={e => setRecipe({ name: e.target.value })}
                />
            </label>
            <button type='submit'>Create</button>
        </form>

    </div>
}