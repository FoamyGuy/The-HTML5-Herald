/*********************************************************************************************
    With HTML and CSS everything that you code is "set in stone" once the page has been loaded
    you cannot change anything about it.

    Javascript is a programming language that gives you the ability to make changes to the HTML
    and CSS on your page after it has already been loaded.

    The most basic example below, it will change the text that is in the element that has the
    class 'change-text'
 ********************************************************************************************/

var myHeading = document.querySelector('.change-text');
myHeading.textContent = "HelloWorld";

/*********************************************************************************************
    Logging messages to the console
 ********************************************************************************************/
console.log("Hello World");


/*********************************************************************************************
    Comments - JS supports the same "block comment" characters as CSS. But also has an optional
    single line comment.
 ********************************************************************************************/
/*
    This is a basic block comment. It works the same as in CSS
 */

// This is an example of a single line comment (which is not supported in CSS)


/*********************************************************************************************
    Variables offer a way for you to temporarily store some information. When you declare
    a variable you choose a name for it. Later on you then set and get the value of that
    variable.

    In the previous example we stored a reference to the heading that we wanted to change in
    a variable. We then accessed our variable and changed the value of it's textContent attribute.
 ********************************************************************************************/

// Declaring a variable
var myVariable;

// Assigning a value to the variable
myVariable = "Hello, Welcome to Javascript";

// Reading the value from the variable
console.log(myVariable);

// Declaring and assigning in 1 statement
var mySecondVariable = "This is another variable";

// Changing the value of a variable
mySecondVariable = "Now the value is different than it was before";
console.log(mySecondVariable);

/*********************************************************************************************
    Data types

    Each variable has a datatype. This type defines what type of data can be stored within the variable.
  ********************************************************************************************/

// String
var myString = "A string must be wrapped in either single or double quotes. It can contain any letters, numbers or characters";

// Number
var myNumber = 10; // Notice numbers do not have any quotes surrounding them.

// Boolean - true or false
var myBoolean = true; // Again no quotes.

// Array - You can store multiple values inside of an array. You can think of it like a list of variables.
var myArray = [1, "hello", false, "some string"];

// Accessing values in an array
console.log(myArray[1]);

// Object
// Any type of data that has not been accounted for is an object. In javascript everything is technically an object.
// when you lookup an HTML element to manipulate it you are finding the object that is associated with that element.
var myh2 = document.querySelector(".my-h2");
console.log(myh2.textContent);

/*********************************************************************************************
    Operators - mathematical symbols that produce a result based on two values (or variables)
  ********************************************************************************************/

// Addition / concatenation
// it will add numbers or combine strings together.
console.log(10+56);
console.log("Hello " + "World");

// Subtract, Multiply, Divide, and Modulus
console.log(27-4);
console.log(27*4);
console.log(27/4);
console.log(27%4);

// Assignment operator
// we've seen this in action already. Assigns the value on the right side to the variable on the left side
var someVariable = "value for the variable";

// Identity operator
// tests to see if two values are equal to each other. Returns true if they are, false if not.
var firstVar = 3;
var secondVar = 4;
var thirdVar = 3;
console.log("firstVar === secondVar: " + (firstVar === secondVar));
console.log("firstVar === thirdVar: " + (firstVar === thirdVar));

// negation and not equal
var myBoolean = true;

// negation takes the opposite of a boolean
console.log("not myBoolean: " + !myBoolean);

// not equal operator checks if two values are not equal to each other.
console.log("firstVar !== secondVar: " + (firstVar !== secondVar));
console.log("firstVar !== thirdVar: " + (firstVar !== thirdVar));

/*********************************************************************************************
    Conditionals - if some thing is true, then I want to do these actions. Else if it was not
    true, then I want to do these other actions instead.
  ********************************************************************************************/
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  console.log('Yay, I love chocolate ice cream!');
} else {
  console.log('Awwww, but chocolate is my favorite...');
}

/*********************************************************************************************
    Loops - Repeat some section of code multiple times.
  ********************************************************************************************/

// looping with a iterator, or count variable.
for(var i = 0; i < 10; i++){
    console.log(i);
}

// looping over every item in an array
for (let value of myArray){
    console.log(value);
}

/*********************************************************************************************
    Functions - Assigning a name to a block of code so that we can re-use it again later
    without having to type the whole thing again.
  ********************************************************************************************/
// declare the function so we can use it later.
function formatTime(totalMinutes){
    return parseInt(totalMinutes / 60) + " hours and " + totalMinutes % 60 + " minutes";
}

//use the function
console.log(formatTime(455));

/*********************************************************************************************
    Events - Get used a lot in javascript. We are assigning a function to be called
    Whenever some event occurs i.e. an element gets clicked.
  ********************************************************************************************/

document.querySelector('.blue-monster').onclick = function() {
    alert('Ouch! Stop poking me!');
};

// this event got set in the html code.
function redMonsterClick(){
    var redMonster = document.querySelector('.red-monster');
    if (redMonster.src.indexOf("red") !== -1){
        redMonster.src = "images/green_monster.png";
    } else {
        redMonster.src = "images/red_monster.png";
    }

}

/*********************************************************************************************
    Thats all for the basic introduction.
    Learn more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
  ********************************************************************************************/