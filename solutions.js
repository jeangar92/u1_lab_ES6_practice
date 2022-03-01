
// const evens = [2,4,6];
// const odds = [1,3,9];

// const masEvens = [...evens, 8, 10]

// console.log(masEvens);


//mergin objects
// const faveFoods = {
//     steak: 'argentina restaurant',
//     tacos: 'mexican restaurant',
//     lobster: 'red lobster'
// };

// console.log(faveFoods)

// const janetFaveFoods = {
//     burgers: "burger king",
//     fries: "Mc Donalds",
//     chicken: "chick-fil-a"
// }

// console.log(janetFaveFoods)

// const allFoods = {
// ...faveFoods,
// ...janetFaveFoods
// }

// console.log(allFoods)


///Destructing


// Part 3 - Destructuring

//     Define yourself in a javascript Object with three keys: name, age, and hometown.

//     Use the destructuring syntax to extract all three keys into variables. Log all three variables.

//     Now we are going to give you a pet. Use destructuring to do the following: 1) add a pet object to your person, 2) define three variables (age, breed, name) outside of the object and 3) add those variables to your pet.
    
//     Log the most important thing about you: your pet's name.


const petAge = 4;
const petName = "Tailer";
const petBreed = "Pincher";
const pet = {petAge,petName,petBreed}

const mySelf = {
    name: "Jean",
    age: 29,
    hometown: "Argentina,Buenos Aires",
    pet
}

const {name, age, hometown} = mySelf


console.log(mySelf)