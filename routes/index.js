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

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('main');
  res.render('main', {title: 'RecipePage'})
  //res.render('recipe', { title: 'Awesesome recipe', h1: recipes.name, h2: recipes.ingredients, p: recipes.instructions});
});

router.get('/recipe/:food_name', (req, res, next) => {
  recipes.name = req.params.food_name;
  res.json(recipes);

})


router.get('/recipe', (req, res, next) => {
  res.render('recipe')

})

router.post('/recipe' , (req, res, next) => {

  res.send(req.body)
  //res.json(JSON.stringify(req.body))
  //console.log(JSON.stringify(req.body))
  //console.log(req.body.ingredients)
/*
  var data_json ={
    "name": req.body.name,
    "instructions": [req.body.instructions],
    "ingredients":[req.body.ingredients]
  */



  //res.send(JSON.parse(req.body))
  
  
  
  
  
  
  
  //console.log(req.body.instructions)
  //req.body.JSONobject;
  //console.log(req.body)
  //res.redirect('/recipe/')

  //recipes.push(req.body);
  //console.log(body)
  //res.send(req.body);
  //console.log(req.body)

})

module.exports = router;