var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list]);
  list++
}

for(var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for(var i = ingredients.length-1; i >= 0; i--) {
  console.log(ingredients[i]);
}