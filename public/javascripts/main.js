





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
  var instruction_list = [];
  var ingredient_list = [];
  //var _foodname = "";


  document.getElementById("add-ingredient").addEventListener("click", function(){
    const ingredient_text_area = document.getElementById("ingredients-text").value
    ingredient_list.push(ingredient_text_area);
    //document.forms.ingredients = ingredient_list
    //console.log(ingredient_list);

  })

  document.getElementById("add-instruction").addEventListener("click", function(){
    const instruction_text_area = document.getElementById("instructions-text").value
    instruction_list.push(instruction_text_area);
    //console.log(instruction_list);

  })

  submit_function = function(){
    //const foodname_text_area = document.getElementById("name-text").value
    //document.forms.ingredients = ingredient_list
    document.getElementsByName("ingredients")[0].value = ingredient_list
    document.getElementsByName("instructions")[0].value = instruction_list
    //console.log(ingredient_list)

  }








}


main_function()
get_user_data();









