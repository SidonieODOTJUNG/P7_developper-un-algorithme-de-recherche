import { recipes } from '../../modules/recipes.js'
import  {recipeFactory} from '../factories/recipesCards.js'

function init() {
    const container = document.querySelector('.recipeContainer')
    recipes.forEach(recipe => {
        let eachRecipe = recipeFactory (recipe)
        let card = eachRecipe.getRecipeCardDOM()
        container.appendChild(card)
    }); 
}

init()
  