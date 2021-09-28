// Week 1 - Activities (Each Activity will need to be ran indivually due to some repeating parameters)


// DOTNOTATION ACTIVITIES //

console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("- - - - - - - - - - -");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("- - - - - - - - - - -");
console.log("     |         |     ");
console.log("     |         |     ");
console.log("     |         |     ");

// Above code shows how to format a table line by line. 

console.table(["Item 1", "Item 2", "Item 3"]);

// Above Code shows how to generate a table containing string values. 

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  var me = new Person("Christian", "Perry");
  
  console.table(me);

 // Above Code shows how to generate a table from a variable and specified data within. 

 let myName = "Christian";
let myAge = 29; 

console.log(myName);
console.log(myAge);
// Above code shows how to set variables and display the variable values on the console log.

// VARIABLE ACTIVITIES //

let i = 10;
console.log(i);
i += 2;
console.log(i);
// Above code sets a variable of i = 10, display 10 on the console. +=2 means add 2 and assigns the vaue to the variable and therefore outputs 12.
/*
let favouriteDrink = "Coffee";
let age = "29";
let name = "Christian";

console.log(`Hello my name is ${name} and I am ${age}. I need a ${favouriteDrink}.`);


// Above code displays a string + the content of the variable using `` and ${} 

let age = 25;
let name = 'James';
let favouriteColour = 'Blue';

console.log(`Hello my name is ${name} and I am ${age}. My favourite colour is ${favouriteColour}.`);

age = 29;
name = 'Christian';
favouriteColour = 'Black'

console.log(`Hello my name is ${name} and I am ${age}. My favourite colour is ${favouriteColour}.`);

*/
// ^ Activity 1 ^


let breakfast = "Toast";
let lunch = "Chicken Sandwich";
let dinner = "Sausage and Mash";

console.log(`Breakfast: ${breakfast}.`);
console.log(`Lunch: ${lunch}.`);
console.log(`Dinner: ${dinner}.`);

breakfast = "Cereal";
lunch = "Pasta";
dinner = "Pizza";

console.log(`Breakfast Tomorrow: ${breakfast}.`);
console.log(`Lunch Tomorrow: ${lunch}.`);
console.log(`Dinner Tomorrow: ${dinner}.`);


// ^ Activity 2 ^


function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);


    const oneDay = 1000 * 60 * 60 * 24;

 
    const diffInTime = date2.getTime() - date1.getTime();


    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}

console.log(getNumberOfDays("9/21/2021", "6/12/2022"));


// ^ Activity 3 ^


let space1 = "X";
let space2 = "O";
let space3 = "";
let space4 = "X";
let space5 = "X";
let space6 = "";
let space7 = "O";
let space8 = "";
let space9 = "";


console.log(`     |         |     `);
console.log(`  ${space1}  |    ${space2}    |     `);
console.log(`     |         |     `);
console.log("- - - - - - - - - - -");
console.log(`     |         |     `);
console.log(`  ${space4}  |    ${space5}    |     `);
console.log(`     |         |     `);
console.log("- - - - - - - - - - -");
console.log(`     |         |     `);
console.log(`  ${space7}  |         |     `);
console.log(`     |         |     `);


// ^ Activity 4 ^



 let age = 20;
 let country = "UK";
 if (age > 17 && country == "UK"){
    console.log("Yes I can serve you.");
 } else {
    console.log("You arent old enough.");
 }

 // ^ Activity 1  - If and Esle^

 let topping = "Olives" ;
 switch(topping){
     case "Chicken":
     case "Mushroom":
         console.log("These are important ingredients for my pizza.");
         break;
         case "Pepperoni":
            case "Onions":
                console.log(`I dont mind having ${topping} on my pizza.`);
                break;     
                case "Pineapple":
                    case "Olives":
                        console.log(`${topping} should not be on a pizza.`);           
 }


 // ^ Activity 2  - If and Esle^



let password = "12345678";
if (password.length < 8){
    console.log("Password not long enough");
} else {
    console.log(password);
}


let num = 15;
if (num % 3 === 0 || num % 5 === 0){
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}


// ^ Activity 3 - If and Esle^


let num = 15;
if (num % 3 === 0 && num % 5 === 0){
    console.log("BuzzFizz");}
    else if (num % 5 === 0){
    console.log("Buzz");
}
    else if (num % 3 === 0){
    console.log("Fizz");
} else {
    console.log("This number is not divisible by 3 or 5");
}



// ^ Activity 4 - If and Esle^



let time = 6 ;
let placeOfWork = "I'm at work";
let townOfHome = "Commuting to work";
let home = "I'm at home";

if (time === 9 || time === 10 || time === 11 || time === 12 | time === 1 || time === 2 || time === 3 || time === 4 || time === 5){
    console.log(placeOfWork);}
    else if (time === 8){
    console.log(townOfHome);
}
 else {
    console.log(home);
}

// ^ Activity 6 - If and Esle^


function endVowel(x){
    const match = x.match(/[aeiou](?!.*[aeiou])/i);
    return match ? match[0] : 'No match';
 }
 
 console.log(endVowel('“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'));

 // ^ Activity 7  - If and Esle^

// ARRAY and LOOP ACTIVITIES //

// ACTIVITY 1 : //

let myFavouriteSongs = [
    "Lee Scott - Rocket Fuel",
    "Abra Cadabra - Trenches",
    "Aitch - GSD Freestyle"
];

console.log(myFavouriteSongs);

myFavouriteSongs.pop();

console.log(myFavouriteSongs);

myFavouriteSongs.unshift("Slaves - Eye Opener");
myFavouriteSongs.unshift("Ghetts - Mozambique");

console.log(myFavouriteSongs); 

let pos = myFavouriteSongs.indexOf('Ghetts - Mozambique');

console.log(pos); 

// Loop Example: //

let favDrinks = [
    "Coke",
    "Dr Pepper",
    "Fanta",
    "Lilt"
];

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i])
}

// While Loop:

let age = 15

while( age < 18 ){
    console.log("You are a child!")
    age++
}
console.log("You are now an adult!")


// LOOP ACTIVITY 1 //


let favFilms = [
    "Fight Club",
    "The Prestige",
    "No Country for Old Men",
    "Moneyball",
    "Superbad"
];
favFilms.push("Snatch");
favFilms.push("Whiplash");

for(let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}

// LOOP ACTIVITY 2 //


const rndInt = Math.floor(Math.random() * 50) + 1
    console.log(rndInt)


// LOOP ACTIVITY 3 //

for(let i=9;i>=0;i--)
{
  console.log(i);
  
}

// LOOP ACTIVITY 4 //


let films = [
    "Fight Club",
    "The Prestige",
    "Snatch",
    "Moneyball"];
for(let i = 0; i < films.length; i++){
    console.log(films[i])
} if (films[2] === "Ghostbusters") {
console.log("Yay it's Ghostbusters!");    
} else {
    console.log("Boo! We want Ghostbusters");
}

// LOOP ACTIVITY 5 //


for (let i = 0; i < 6; i++) {
    let randomNum = (Math.floor(Math.random()*30) + 1);
    if (randomNum % 7 == 0){
        console.log(`${randomNum} is divisible by 7`)
    }else{
        console.log(`${randomNum} is not divisible by 7`)
    }
}    

// LOOP ACTIVITY 6 //


let philsFollowers = [
    "Jo",
    "Beth",
    "Harry",
    "Luke"
]
let bensFollowers = [
    "Jane",
    "Emma",
    "Harry",
    "Luke"
]
for (let i = 0; i < philsFollowers.length; i++) {
    for (let j = 0; j < bensFollowers.length; j++) {
        if(philsFollowers[i]==bensFollowers[j] ){
            console.log(philsFollowers[i], bensFollowers[j])
        }
    }
    
}

// FUNCTION ACTIVITES //

//------------ [EXAMPLE FUNCTION] ------------//

function greeting(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greeting('John', 'Smith');

//  - When the example function is called it will display a personalised greeting - //

//------------ [EXAMPLE ARROW FUNCTION] ------------//
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(9,1);
console.log(addUp(30,5));
//  - The above example uses parameters (num1 and num2) to return the sum of the 2 numbers, input can be cahanged as parameters are set - //

//------------ [ACTIVITY 1 - FUNCTION TO CHANGE TO ARROW FUNCTION] ------------//
function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
        return (n * factorial(n-1));}
}

console.log(factorial(33));
//------------ [ACTIVITY 1 - UPDATED FUNCTION] ------------//
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
        return (n * factorial(n-1));}
}

console.log(factorial(33));

//------------ [ACTIVITY 2 - UPDATED PIZZA ORDERING FUNCTION] ------------//

let orderCount = 0;

const takeOrder = (size, topping1, topping2) => {
    orderCount++;
    console.log(`Order Number: ${orderCount}`)
    console.log(`A ${size} Pizza with ${topping1} and ${topping2}`);
}
takeOrder("14-inch", "Chicken", "Mushroom");
takeOrder("10 inch", "Pepperoni", "Onions");

//------------ [ACTIVITY 3 - CASH MACHINE FUNCTION] ------------//


let accBal = 500;

const withdraw = (accBal, withdrawAmmount, pinNum) => {
    if ((accBal >= withdrawAmmount) && (pinNum == 0000)) {
    console.log(`Transaction approved. Please collect your £${withdrawAmmount}.`);
} else {
    console.log("Transaction Denied");}

}

withdraw(500, 1000, 0000);


//------------ [EXAMPLE OBJECT] ------------//
let person = new Object();

person.name = "Christian";
person.age = 29; 

//------------ [ACTIVITY 1 - NAME] ------------//
const person = {
    name: "Christian",
    age: 29,

    sayHello(){
        return console.log(`Hello my name is ${this.name}`)
    }
}
person.sayHello();

//------------ [ACTIVITY 2 - PET] ------------//

const pet = {
    name:  "Ruby",
    animal: "Cat",
    age: "10",
    colour: "Black and White",

    eat(){
        return console.log(`The ${this.animal} named ${this.name} is eating Dreamies.`)
    }, 
    drink(){
        return console.log(`The ${this.animal} named ${this.name} is drinking Water.`)
    }}
    pet.eat();
    pet.drink();



//------------ [ACTIVITY 3 - CAFE] ------------//


const coffeeShop = {
    branch: 'Manchester',
  
    drinks: {
      americano: 2,
      latte: 2.50,
      espresso: 1.5,
      capuccino: 3,
    },
  
    food: {
      cookie: 1.5,
      muffin: 2,
      sandwich: 3,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & ');
      drinks.forEach(drink => (cost += this.drinks[drink]));
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(drinksStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('capuccino', 'espresso');
  coffeeShop.foodOrdered('cookie', 'muffin');