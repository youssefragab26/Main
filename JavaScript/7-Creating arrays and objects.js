// 1. Create a new empty array literal and assign it to the variable clothes.
// 2. Add 5 of your favorite items of clothing as strings using the push() method.
// 3. Remove the fifth piece of clothing from the array using the pop() method.
// 4. Add a new piece of clothing using the push() method.
// 5. Use console.log to show the third item from the clothes array in the console.
// 6. Create a new empty object literal and assign it to the variable favCar.
// 7. Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
// 8. sing the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.
// 9. Use the console to log the entire favCar object.

// Remember to use the object literal syntax: {}.

// Remember to use the array literal syntax: [].


var clothes = [];
clothes.push("T-Shirt", "Trousers", "Socks", "Shoes", "Jacket");
clothes.pop();
clothes.push("Pants");
console.log(clothes[2]);
// output: Socks

var favCar = {};
favCar.color = "Blue";
favCar.convertible = true;
console.log(favCar);
// output: {color: "Blue", convertible: true}

