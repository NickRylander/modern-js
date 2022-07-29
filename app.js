/*
// Setting the variable name to a prompt on the server
let name_input = prompt("What is your name?");
// Collecting that input from the div with and id 'welcome' and putting that value into the div, and printing 'Welcome, *name input*!'
if (name_input != "" || null) {
    document.getElementById('welcome').innerHTML = `Welcome, ${name_input}!`;
} else {
    window.alert("Please refresh and put in a valid name!");
}
*/

// STRING METHODS

/*
.length ==> length
.concat() ==> appends onto the end
.toUpperCase() ==> all letters are caps
.toLowerCase() ==> all letters are lower case
.indexOf() ==> what spot is the character(s) located
.substring(starting point, how many characters to remove) ==> return a trimmed string
.slice(starting point, how many characters to remove) ==> returning a trimmed string
.split() ==> split the string apart -- ie. .split(' ') ==> split it at the spaces
.replace(what you want to replace, what you replace it with) ==> replace a character(s) with something
.includes() ==> does the string include a character(s)
.repeat() ==> keep repeating however many times 
*/


// TEMPLATE STRINGS
/*
const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

let theHtml = `
    <ul>
    <li>Item: ${product1}</li>
    <li>Price: $${price1}</li>
    <li>Item: ${product2}</li>
    <li>Price: $${price2}</li>
    <li>Total: $${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2
};

let app = document.querySelector('#app');
app.innerHTML = theHtml;
*/


//ARRAYS
/*
// Array of Months
const months = new Array('January', 'February', 'March', 'April', 'May', 'June');

// Array with mixed values and data types!
const mixedArray = ["Hello", 10, true, "Yes", null];

.push() ==> add an element to the end of an array
.unshift() ==? add an element at the beginning of an array
.pop() ==> remove element from the end of an array
.shift() ==> remove element from teh beginning of an array
.splice(position, how many elements you want to remove, what you want to replace it with) ==> remove element from a specific position in an array
.reverse() ==> reverse the order of the elements in an array
.concat() ==> combines arrays
.sort() ==> alpha || numeric sorting
    // Order from lower to greater
    arrayNumbers.sort(function(x, y) {
        return x - y;
    });

    // Order from greater to lower
    arrayNumbers.sort(function(x, y) {
        return y - x;
    });
*/

/*
// OBJECTS

const person1 = {
    firstName: 'Nick',
    lastName: 'Rylander',
    job: 'Web Developer',
    email: 'nick.rylander@outlook.com',
    age: 31,
    favoriteMusic: ['Rock', 'EDM', 'Big Band'],
    location: {
        city: 'Orangevale',
        state: 'California',
        country: 'United States'
    },
    birthYear: function() {
        return new Date().getFullYear() - this.age;
    }
};

console.log(person1)

// Array of Objects

let cars = [
    {model: 'Mustang', engine: 5.0},
    {model: 'Camero', engine: 6.0},
    {model: 'Challenger', engine: 6.0}
]

console.log(cars)

// FOR LOOP

for(let i=0; i < cars.length; i++) {
    console.log(cars[i].model)
}
*/

/*
// IIFE's = Functions that are invoked immediately (Immediately-Invoked Function Expression)

(function() {
    console.log('This is an IIFE')
})();

(function(technology) {
    console.log(`Learning ${technology}`)
})('JavaScript');

// PROPERTY METHODS (function that is inside an object is a method)
const musicPlayer = {
    play: function(id) {
        console.log(`Playing song: ${id}`)
    },
    pause: function() {
        console.log('Paused')
    }
}

musicPlayer.play('Enter Sandman')
musicPlayer.pause()
*/


// Dates
/*
const today = new Date();
// const birthday = new Date('November 21, 1990')
let output;

output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getHours();
output = today.getTime();
output = today.getFullYear();
output = today.setFullYear(2022);


console.log(output);
// console.log(today);
// console.log(birthday);
*/


// IF OPERATOR
/*
const learningJavaScript = true;

if(learningJavaScript) {
    console.log('Great')
} else {
    console.log('Not so great')
}

const score = 100

if(score == 100) {
    console.log('Yes')
} else {
    console.log('No')
}
*/


// IF, ELSE IF, ELSE
/*
let cash = 500
let cartTotal = 300

if(cash <= cartTotal) {
    console.log('Successful Payment')
} else {
    console.log('Insufficient Funds')
}

let currentTime = 20;
if(currentTime <= 10) {
    console.log('Good Morning')
} else if (currentTime <= 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Night')
}
*/


// SWITCH




// LEET CODE
var fizzBuzz = function(n) {
    let newArr = []
    if((n % 3 === 0) && (n % 5 === 0)) {
        newArr.push("FizzBuzz")
    } else if (n % 3 === 0) {
        newArr.push("Fizz")
    } else if (n % 5 === 0) {
        newArr.push("Buzz")
    } else {
        newArr.push("n")
    }
    return newArr
};

console.log(fizzBuzz(3))