const { json } = require('express');
var express = require('express');
var router = express.Router();
/*
import fetch from 'node-fetch';
globalThis.fetch = fetch;
*/

let recipes = {
  "name": "",
  "instructions": ["Cook on a medium heat",
    "Add seasoning such as salt and pepper", "Add Polpa and mix it with meat",
    "Add other ingredients, such as onions to the mixture.",
    "Boil the rice in medium boiling water for 10 minutes.",
    "Mix the rice and meat together",
    "Add some additional ingredients such as tomato and pepper."
  ],
  "ingredients": [
    "Chicken",
    "Ground beef",
    "Rice",
    "Onion",
    "Tomato",
    "Pepper",
    "Polpa"
  ]
}
//let url = "http://localhost:8000/recipe/" + recipes.name;
let url = "http://localhost:8000/recipe/food"
//console.log(url)


router.get('/recipe/:food_name', (req, res) => {
  recipes.name = req.params.food_name;
  res.json(recipes);

})


/*
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

*/

/*
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
*/
module.exports = router;