export interface IRecipe {
    id: number,
    name: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> { }