
import React, { useEffect, useState } from 'react';
import Recipe from "./components/Recipe/Recipe"


import './App.css';


const App = () => {

  const APP_ID = "d6cbc94d"
  const KEY = "ab92dfb681356353ec97d41bf84211ec"
  const [ recipe, setRecipe ] = useState([])

  useEffect( () => {
    fetchfood()
  }, [])

  const fetchfood = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${KEY}`)
    const data = await response.json()
    setRecipe(data.hits)
  }

  return(
    <div className="App">
      <form>
        <input type="text" className="form"></input>
        <button className="search-button">Search</button>
      </form>

      {recipe.map(recipe => (
        <Recipe />
      ))}
    </div>

  )
}

export default App