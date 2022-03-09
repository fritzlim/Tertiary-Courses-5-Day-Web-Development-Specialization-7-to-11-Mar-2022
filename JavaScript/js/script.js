document.write("<p>hello world</p>"); // This will end up at the end of the webpage.

// // **** Example of running code immediately after this js file is loaded. ****
// document.getElementById('demo').innerHTML = Date();
// alert('Hello world');
// // ***************************************************************************

// function onButtonClick() {
//     document.getElementById('demo').innerHTML = Date();
// }

const name = 'Fritz';
const string = 'asdfasdf12312!@#@#$' // An example of a string.
let demo = document.getElementById('demo');
const demo2 = document.getElementById('demo2');
const demoInnerHtml = document.getElementById('demo').innerHTML; // This will get the innerHTML as a string.

debugger; // Example of placing a breakpoint.

var x = 16 + 'Volvo'; // This is string joining (concatenation).
console.log(`The value of x is ${x}`);

var y = 16 + 1; // This is addition.
y++; // Same as y = y + 1.
y += 1; // Shortcut that means y = y + 1.
console.log(`y = ${y}`);

var z = 16 + 1 + 'Volvo'; // This is string concatenation.
console.log(`z=${z}`);

const selection = ['a', 'b', 'c'];
// console.log(selection[0]); // To read the 0th element of the array.
var mySelection = selection[10%3]; // Example use of modulo.
console.log(mySelection);

document.write('hello'); // This will write to the bottom of the page.
// document.getElementById('demo').innerHTML = `<i>${5 + 6}</i>`; // Use backtick to create a literal string.
document.getElementById('demo').innerHTML = `<i>${name}</i>`; // Use backtick to create a literal string.

debugger; // Example of placing a breakpoint.

demo.innerHTML = "\'This is a string with quotes.\'";
demo.innerText = "This is a sentence that\noccupies 2 lines.";
demo.innerHTML = "This is a sentence that<br>occupies 2 lines.";

// alert("This is a sentence that\noccupies 2 lines.");

var str = "Please locate where 'locate' occurs";
var pos = str.indexOf('locate');
console.log(pos);

var str = 'Visit W3Schools!';
let n = str.search('W3Schools'); // The count starts with 0.

let pattern = /w3schools/i; // A regular expression (also called regex).
n = str.search(pattern);
demo.innerHTML = n;

let name1 = 'Fritz Lim';
let nameSlice = name1.slice(); // Slice the string into individual characters.
let nameSplit = name1.split(' '); // Split the string into individual words.

console.log(nameSlice[0]);
console.log(nameSplit[1]);

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits.sort()); // Overwrites the array.
console.log(fruits.reverse()); // Overwrites the array.
console.log(`fruits array is ${fruits}`);

let myDate = new Date('2022-03-08');
let myDateAndTime = new Date('2022-03-08 01:00');
console.log(myDate);
console.log(myDateAndTime);

console.log(myDate.getDay());

if (myDate.getDay() == 2) {
    console.log('We are closed today');
}

let currentDate = new Date();
let futureDate = new Date('2022-03-09');

if (Date.parse(futureDate) >= Date.parse(currentDate)) {
    console.log('That is in the future');
}

y = new Boolean(0);
console.log(y);

let person = {
    name: "Ally",
    height: 160,
    others: {
        lastName: "Doe",
        numberOfSiblings: 2
    }
}

demo.innerHTML = `<p>${person.name}'s height is ${person.height}cm</p>`;
demo.innerHTML = '<p>' + person.name + '\'s height is ' + person.height + 'cm</p>';

demo.innerHTML = `<p>${person.name}'s height is ${person.height}cm, and her surname is
${person.others.lastName} and number of siblings is ${person.others.numberOfSiblings}.</p>`;

console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5

console.log(Math.floor(4.7)); // 4

let area = Math.PI * 5 ** 2;
console.log(area);
demo2.innerHTML = area;

currentDate = new Date();
if (currentDate.getHours() >= 0 && currentDate.getHours() < 12) {
    console.log('Good morning');
} else if (currentDate.getHours() > 12 && currentDate.getHours() < 18) {
    console.log('Good day');
} else {
    console.log('Good evening');
}

let name2 = 'John';
let name3 = 'Joe';
let name4 = 'Jane';

if (name2 == 'John' && name3 == 'Joe_' && name4 == 'Jane') {
    console.log('Their names are correct');
} else {
    console.log('One or both of the names are wrong');
}

if (name2 == 'John' || name3 == 'Joe_') {
    console.log('At least one name is correct');
} else {
    console.log('Both of the names are wrong');
}

let a = 6;
let b = 8;
let answer = (a > b) ? 'a is greater than b' : 'b is greater than a';
console.log(answer);

// // **** This code is placed into handleFormSubmit() **** 
// let grade = 'Z';
// switch (grade) {
//     case 'A':
//         alert('Well done');
//         break; // if break is omitted then the next case will also be executed.
//     case 'B':
//         alert('Good job');
//         break; // if break is omitted then the next case will also be executed.
//     case 'C':
//         alert('Work harder next time');
//         break; // if break is omitted then the next case will also be executed.
//     default:
//         alert('I am not sure of your grade');
// }
// // *****************************************************

var person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName; 
        // return person2.firstName + " " + person2.lastName; // Same effect as the previous line.
    }
}

console.log(person2.fullName());

const onButtonClick = () => {
    document.getElementById('demo').innerHTML = Date();
    console.log('onButtonClick() has been called');
    console.warn('onButtonClick() has been called');
    console.error('onButtonClick() has been called');

    if(true) { // To demo the scope of a variable declared with let.
        let n = 2; // This value of n is different from the outer scope.
        console.log(n);
    }

    console.log(n); // To demo the scope of a variable declared with let.
}

cars = ["BMW", "Volvo", "Saab", "Ford"];
for (var i = 0; i < 4; i++) {
    demo += cars[i] + '<br>';
}

const handleFormSubmit = () => {
    event.preventDefault(); // Prevents default submit button behaviour.
    console.log(document.getElementById('grade').value);

    let grade = document.getElementById('grade').value.toUpperCase();
    switch (grade) {
        case 'A':
            alert('Well done');
            break; // if break is omitted then the next case will also be executed.
        case 'B':
            alert('Good job');
            break; // if break is omitted then the next case will also be executed.
        case 'C':
            alert('Work harder next time');
            break; // if break is omitted then the next case will also be executed.
        default:
            alert('I am not sure of your grade');
    }
}

console.log(`Outside of onButtonClick() n=${n}`);