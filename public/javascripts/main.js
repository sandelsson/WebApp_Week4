
main_function = function() {
  fetch('/recipe/Food')
    .then(response => {
      return response.json()
    })
    .then(data => {
      //console.log(data.instructions)
      const container_div = document.getElementById("container")
      const food_header = document.createElement("h2");
      food_header.innerHTML = data.name;
      container_div.append(food_header)
      const recipe_array = data.instructions
      //console.log(recipe_array[1])
      //console.log(recipe_array.length)
      for (let i = 0; i < recipe_array.length; i++){
        var food_name_div = document.createElement("li");
        food_name_div.innerHTML = data.instructions[i]
        container_div.append(food_name_div)
      }
      const ingredient_header = document.createElement("h2")
      ingredient_header.innerHTML = "Ingredients"
      container_div.append(ingredient_header)
      const ingredient_array = data.ingredients;
      //console.log(ingredient_array.length)
      for (let a = 0; a < ingredient_array.length; a++){
        var ingredient_div = document.createElement("li");
        ingredient_div.innerHTML = data.ingredients[a]
        container_div.append(ingredient_div )
      } 


    })
    .catch(error => {
      console.log("error");
    })
  }


get_user_data = function(){

  
  //initializing json object that will be returned to the server-side and posted to /recipe
  let json_data = {
    "name" : "",
    "ingredients" : [],
    "instructions": []
  }

  //creating variables for all the needed elements (buttons and textareas)

  //textareas
  const recipeTextArea = document.getElementById("name-text");
  const ingredientsTextArea = document.getElementById("ingredients-text");
  const instructionsTextArea = document.getElementById("instructions-text");
  
  //buttons
  const addIngredientsButton = document.getElementById("add-ingredient");
  const addInstructionsButton = document.getElementById("add-instruction");
  const addSubmitButton = document.getElementById("submit");





  //Function for adding ingredients into an array.
  //If the textarea is empty, nothing is added to the list
  addIngredientsButton.addEventListener("click", function () {

    let ingrInput = ingredientsTextArea.value

    //making sure there's some input on the textarea
    if (ingrInput == ""){
      console.log("*** ERR: empty string in 'ingredients-textArea");
    } else {
      json_data.ingredients.push(ingrInput);
    }

    console.log(json_data.ingredients)
    });


  addInstructionsButton.addEventListener("click", function() {

    let instrInput = instructionsTextArea.value;


    
    //making sure there's some input on the textarea
    if (instrInput == ""){
      console.log("Textarea empty, nothing will be added to the list");
    } else{
      json_data.instructions.push(instrInput);
    }
    console.log(json_data.instructions)
    //console.log("== DEBUG: inside datalist.instructions: " + JSON.stringify(json_data.instructions));
  });


  addSubmitButton.addEventListener("click", function() {

    if (recipeTextArea.value == ""){
      console.log("Textarea empty, empty name will be added to json_object.name")
    }else{
      json_data.name = recipeTextArea.value
    }


    fetch("/recipe", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json_data) ,
    })
    .then(response => response.json())
    .then(response => JSON.stringify(response))
    .then(response => console.log(response))
    /*.then(
      res => console.log(res))*/


  });
}

main_function();
get_user_data();