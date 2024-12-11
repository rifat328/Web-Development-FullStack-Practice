let animels = ["Tiger", "Lion", "Chettas", "Wolvs"];
animels.push("Humming-Bird", "Doyel");
let Birds=["Humming Bird", "Doyel", "Sparrow","Eagle"];
console.log(animels);
animels.pop();
console.log(animels);
animels.shift();
console.log(animels);
animels.unshift("Bangol Tiger", "Dog");
console.log(animels);
animels.splice(2, 1, "Lion");
console.log(animels);
animels.splice(1,1,"Hayenas");
console.log(animels);
console.log("______---_______---__________--____");
animels=animels.concat(Birds);
console.log(animels);
console.log(animels.at(2));
console.log("______---_______---__________--____");
console.log(animels.copyWithin(0, 2 ,4));
//! array map
const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(capitalized); // ["Alice", "Bob", "Charlie", "Danielle"]

const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
const squares = nums.map(function(num) {
    return num * num
})


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

console.log(pokemon.map((pok)=>'<p>'+pok+'</p>'));

// const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

// console.log(paragraphs)