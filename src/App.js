
import React, { useEffect, useState } from 'react';
import Recipe from "./components/Recipe/Recipe"


import './App.css';


const App = () => {

  const APP_ID = "d6cbc94d"
  const KEY = "ab92dfb681356353ec97d41bf84211ec"
  const [ recipe, setRecipe ] = useState([])
  const [searchVal, setSearchVal ] = useState('')
  const [query, setQuery ] = useState("chicken")

  useEffect( () => {
    fetchfood()
  }, [query])

  const fetchfood = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY}`)
    const data = await response.json()
    setRecipe(data.hits)
    console.log(data.hits)
  }

  const updateData = e => {
    setSearchVal(e.target.value)
  }

  const getData = e => {
    e.preventDefault()
    setQuery(searchVal)
    setSearchVal('')
  }

  return(
    <div className="App">
      <form onSubmit={getData}>
        <input type="text" className="form" value={searchVal} onChange={updateData}></input>
        <button className="search-button">Search</button>
      </form>

      {recipe.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          time={recipe.recipe.totalTime}
          
        />
      ))}
    </div>

  )
}

export default App