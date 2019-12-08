import React from 'react'
import './Recipe.style.scss'

const Recipe = ({ title, image, ingredients, }) => {
    

        return(

            <div className="recipe">
                <h1 className="recipe__title">{title}</h1>
                <div className="recipe__image-container">
                    <img src={image} alt={title} className="recipe__image-container__image"/>
                </div>
                <div className="recipe__description-box">
                <p className="recipe__description-box__text">Ingredients:</p>
                <ul className="recipe__description-box__list">
                    
                    {ingredients.map(ingredient => (
                        <li key={ingredient.weight+Math.random() }
                        className="recipe__description-box__list__item"
                        >
                        {ingredient.text}
                        </li>
                       
                    ))}
    
                </ul>
                </div>
                
            </div>
        )
        
   
    
}

export default Recipe