/***************************/
/***************************/
/**** DOM Recipes Cards ****/
/***************************/
/***************************/
 
export function recipeFactory (data) {
    const {name, ingredients, time, description} = data
  
    function getRecipeCardDOM () {

        const flexClass = ['d-flex', 'flex-row', 'justify-content-between']

        const article = document.createElement('article')
        article.classList.add('card', 'ml-1', 'mt-5')

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

        const ingredientList = document.createElement('div')
        ingredientList.classList.add('ingredient-list')
        
        // line.textContent = ingredients[0].quantity //quantités
        // strong.textContent = ingredients[0].ingredient  // ingredient
        ingredients.forEach(ingredient => {
            const line = document.createElement('div')
            line.classList.add('d-flex', "flex-row", 'ingredient-line')
            const strong = document.createElement('strong')
            strong.textContent = ingredient.ingredient
            const qte = document.createElement('p')        

            if(ingredient.quantity ) {
                // if(ingredient.unit) {
                //     qte.textContent = `: ${ingredient.quantity}`+ ' ' + ingredient.unit
                // } else {
                    qte.textContent = `: ${ingredient.quantity}`
                // }  
            }
            if(ingredient.quantite) {
                // if(ingredient.unit) {
                // qte.textContent = `: ${ingredient.quantite}` + ' ' + ingredient.unit
                // } else {
                    qte.textContent = `: ${ingredient.quantite}`
                // }
            }
            
            line.append(strong, qte)
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