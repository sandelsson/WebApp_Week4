



/*
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}
*/


/*
recipe_array.forEach(recipe => {
  var food_name_div = document.createElement("li");
  food_name_div.innerHTML = data.instructions
  container_div.append(food_name_div)
})

*/
/*
for (const recipe of data.instructions){
  var food_name_div = document.createElement("li");
  food_name_div.innerHTML = data.instructions
  container_div.append(food_name_div)

}
*/
/*
for (let i = 0; i < recipe_array.lenght; i++){
  var food_name_div = document.createElement("li");
  food_name_div.innerHTML = data.instructions
  container_div.append(food_name_div)
}
*/

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

//creating list that consists of the recepies
function create_list(){

}