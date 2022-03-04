/***************************/
/***************************/
/**** DOM Recipes Cards ****/
/***************************/
/***************************/

import { recipes } from './modules/recipes.js'
console.log(recipes)
  
function recipeFactory (data) {
    const {name, ingredients, time, description} = data
  
    function getRecipeCardDOM () {

        // <article class="card m-5">
        // <img class="card-img-top" alt="Card image cap">
        // <div class="card-body">

        // <div class="d-flex flex-row justify-content-between">
        //     <h2 class="card-title h5">Card title</h2>
        //     <div class="d-flex flex-row clock-section">
        //         <span class="far fa-clock mt-1 h5"></span>
        //         <p class="h5 font-weight-bold">min</p>
        //     </div>
        // </div>

        // <div class="d-flex flex-row justify-content-between recipe-section">
        //     <div class="list-section">
        //         <ul class="ingredient-list">
        //             <li> <strong>ingredient : </strong>qte </li>
        //             <li> <strong>ingredient : </strong>qte </li>
        //             <li> <strong>ingredient : </strong>qte </li>
        //             <li> <strong>ingredient : </strong>qte </li>
        //         </ul>
        //     </div>
        //     <p class="card-text recipe-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        // </div>
    //     </div>
    // </article>
        const flexClass = ['d-flex', 'flex-row', 'justify-content-between']

        const article = document.createElement('article')
        article.classList.add('card', 'm-5')

        const img = document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('alt', 'Card image cap')

        const presentationRecipe = document.createElement('div')
        presentationRecipe.classList.add('card-body')

        const flexDiv = document.createElement('div')
        flexDiv.classList.add(...flexClass)
        
        const titleCard = document.createElement('h2')
        titleCard.classList.add('card-title', 'h5')
        titleCard.textContent = name //titre

        const timingDiv = document.createElement('div')
        timingDiv.classList.add('d-flex', 'flex-row', 'clock-section')

        const clockItem = document.createElement('span')
        clockItem.classList.add('far', 'fa-clock', 'mt-1', 'h5')

        const minutesP = document.createElement('p')
        minutesP.classList.add('font-weight-bold', 'h5')
        minutesP.textContent = time //nb minutes

        timingDiv.append(clockItem, minutesP)
        flexDiv.append(titleCard, timingDiv)


        const secondflexDiv = document.createElement('div')
        secondflexDiv.classList.add(...flexClass, 'recipe-section')

        const sectionList = document.createElement('div')
        sectionList.classList.add('list-section')

        const ingredientList = document.createElement('ul')
        ingredientList.classList.add('ingredient-list')
        
        // line.textContent = ingredients[0].quantity //quantités
        // strong.textContent = ingredients[0].ingredient  // ingredient
        ingredients.forEach(ingredient => {
            const line = document.createElement('li')
            line.textContent = ingredient.quantity
            const strong = document.createElement('strong')
            strong.textContent = ingredient.ingredient
            line.appendChild(strong)
            ingredientList.appendChild(line)
        });      

        sectionList.appendChild(ingredientList)

        const recipeText = document.createElement('p')
        recipeText.classList.add('card-text', 'recipe-text')
        recipeText.textContent = description //recette

        secondflexDiv.append(sectionList, recipeText)

        presentationRecipe.append(flexDiv, secondflexDiv)
        article.append(img, presentationRecipe )

        return article
    }

    return {name, ingredients, time, description, getRecipeCardDOM }
}

function init() {
    const container = document.querySelector('.recipeContainer')
    recipes.forEach(recipe => {
        let eachRecipe = recipeFactory (recipe)
        let card = eachRecipe.getRecipeCardDOM()
        container.appendChild(card)
    }); 
}

init()
  