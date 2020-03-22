
import React, { useEffect, useState } from 'react';
import Recipe from "./components/Recipe/Recipe"
import {ReactComponent as Icon } from './img/spoon-knife.svg'
import Loader from './components/Loader/Loader';


import './App.style.scss'


const App = () => {

  //This should be hidden as env variables in the future
  const APP_ID = "ccaa1f56"
  const KEY = "015189345f20b91784cd3f2da7d27ea7"
  
  const [ recipe, setRecipe ] = useState([])
  const [searchVal, setSearchVal ] = useState('')
  const [query, setQuery ] = useState("leek")
  const [loading, setLoading ] = useState(false)

  useEffect( () => {
    fetchfood()
    }, [query])

   const fetchfood = async () => {
    setLoading(true)
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY}`)
    const data = await response.json()
    setRecipe(data.hits)
    setLoading(false)
   
     }

  const updateData = e => {
    setSearchVal(e.target.value)
  }

  const getData = e => {
    e.preventDefault()
    setQuery(searchVal)
    setSearchVal('')
  }
 
  if (recipe.length > 0) {
    
    return(
     
      <div className="wrapper">
        <header className="header">
          <div className="logo-container">
           <Icon className="logo-container__logo"/>
          </div>
          <h1 className="header__title">Crazy Spoons</h1>
          <p className="header__text">Welcome to Crazy Spoons, a place where You can fetch ideas
          for Your next meals and drinks. Type ingredient below and discover new recipes.
          </p>
        
        </header>
        <section className="form-board">
         
          <form onSubmit={getData} className="form">
            <input type="text" className="form__input" value={searchVal} onChange={updateData}
            placeholder="ingredient"
            ></input>
            <button className="search-button">Search</button>
          </form>
        </section>
        {loading? (
        <Loader/>) : (
        
        <section className="recipe-board">
         
        {
         
          recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            time={recipe.recipe.totalTime}
            
          />
        ))}
        </section>)}
        <footer className="footer">
        <p className="footer__copy">Copyright &copy; 2019 Piotr Kuźma</p>
        <p className="footer__copy">External API from edamam.com</p>
        </footer>
      </div>
  
    )

  } else {
    
    //No Recipe component 
    return(
      <div className="wrapper">
        <header className="header">
          <a href="/">
          <div className="logo-container">
           <Icon className="logo-container__logo"/>
          </div>
          </a>
          <h1 className="header__title">Crazy Spoons</h1>
          <p className="header__text">Welcome to Crazy Spoons, a place where You can fetch ideas for Your
           next meals and drinks. Type ingredient below and discover new recipes.
          </p>
        
        </header>
        <section className="form-board">
         
          <form onSubmit={getData} className="form">
            <input type="text" className="form__input" value={searchVal} onChange={updateData}
              placeholder="ingredient"
            ></input>
            <button className="search-button">Search</button>
          </form>
        </section>
  
  
        <section className="recipe-board">
          <p className="recipe-board__failed">Try searching for something else ;)</p>
        </section>
        <footer className="footer">
        <p className="footer__copy">Copyright &copy; 2019 Piotr Kuźma</p>
        <p className="footer__copy">External API from edamam.com</p>
        </footer>
      </div>
  
    )
  }
 
}

export default App