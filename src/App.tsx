import React, { useState } from 'react';
import RecipeItem from './components/recipe-item/RecipeItem';
import User from './components/user/user';
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/create-recipe/CreateRecipe';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('');


  const { isLoading, data, error } = useGetRecipesQuery(
    queryTerm,
    {
      //pollingInterval: 1000
      //skip:

    });

  const handleSearch = () => {
    setQueryTerm(searchTerm)

  }

  console.log('isLoading', isLoading);
  console.log('data', data);
  console.log('error', error);


  return (
    <div className="App">
      <User />
      <CreateRecipe />
      <div>
        <p>If you wanna find:</p>
        <input
          type='search'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Enter search'>

        </input>
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? <div>Loading..</div> :
        data?.map((recipe: any) =>
          <RecipeItem key={recipe.id} recipe={recipe} />
        )}
      {/* <RecipeItem recipe={{
        id: 1,
        name: 'Лазанья'
      }} />
      <RecipeItem recipe={{
        id: 2,
        name: 'Каша'
      }} />
      <RecipeItem recipe={{
        id: 3,
        name: 'Суп'
      }} /> */}
    </div>
  );
}

export default App;
