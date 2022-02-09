// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(victim){

    //     if(typeof victim != "number"){
    //         return 0;
    // }

    //     let output = victim * victim;

    //     return output;
    return victim
}
console.log(squared("parrots"));
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)



// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5
function stringLength(victim){
    // create a variable to hold length of string
    let theLength = 0;

    // get the length of the string
    theLength =victim.length;
    
    // return the value
    return theLength;

}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers (um, dois){
    //validating inputs
    if(typeof um != "number"){
        um = parseFloat(um);

        if(isNaN(um)){
            return NaN;
        }

    }
    if(typeof dois != "number"){
        dois = parseFloat(dois);
        if (isNaN(dois)){
            return NaN;
        }

    }
    
    //add number together
    
    let output = um + dois;
    return output;
}
console.log(addNumbers(7, 3));
console.log(addNumbers("house", 5));
console.log(addNumbers(4, 2));
console.log(addNumbers(6, "dogs"));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(theName){
    let output ="Hello, " + theName;

    return output;

}
 console.log(sayHello("Daniel"));