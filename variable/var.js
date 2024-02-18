function outerFunction() {
    var innerMessage = "Hello from inner function";

    console.log("Can be accessed from within:", innerMessage);
}

outerFunction();

console.log("Can also be accessed from outside the function:", innerMessage); // this will give eroor
