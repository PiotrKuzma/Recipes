
import React, { useEffect, useState } from 'react';


import './App.css';


const App = () => {

  const APP_ID = "d6cbc94d"
  const KEY = "ab92dfb681356353ec97d41bf84211ec"
  const example = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${KEY}`

  useEffect( () => {
    console.log("Effect used")
  })

  return(
    <div className="App">
      <form>
        <input type="text" className="form"></input>
        <button className="search-button">Search</button>
      </form>
    </div>

  )
}

export default App