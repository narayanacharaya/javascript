var x = 10;

function outerFunction() {
    var x = 20;
    console.log("Inside function - Inner variable:", x);
}

outerFunction();

console.log("Outside function - Outer variable:", x);
// Shadowing occurs due to the scoping rules of JavaScript, specifically variable hoisting.

// another example which gives error is 
var x = 10;

function outerFunction() {
    console.log("Inside function - Inner variable:", x); // undefined beaucse of hosting 
    var x = 20;
    
}
outerFunction();

console.log("Outside function - Outer variable:", x);
// Second one gives more  and clear view of shadowing in javascript