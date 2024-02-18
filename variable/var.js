// function outerFunction() {
//     var innerMessage = "Hello from inner function";

//     console.log("Can be accessed from within:", innerMessage);
// }
// console.log("Can also be accessed from outside the function:", innerMessage);
// outerFunction();


function example() {
    if (true) {
        var varVariable = "I'm a var variable";
        let letVariable = "I'm a let variable";
    }
    
    console.log("Accessing varVariable outside the block:", varVariable);
    // console.log("Accessing letVariable outside the block:", letVariable); // This will cause an error
}

example();
// this is rather the best example of var vs lets