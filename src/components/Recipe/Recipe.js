import React from 'react'

const Recipe = ({ title, image, ingredients, }) => {
    return(

        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            
            <div>
            <p>Ingredients:</p>
            <ol>
                
                {ingredients.map(ingredient => (
                    <li key={ingredient.weight+Math.random() }>{ingredient.text}</li>
                   
                ))}

            </ol>
            </div>
            
        </div>
    )
}

export default Recipe