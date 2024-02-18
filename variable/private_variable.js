function createCounter() {
    // Private variable
    var count = 0;

    // Inner function (closure) to access and modify the private variable
    function increment() {
        count++;
        console.log("Counter:", count);
    }

    return increment;
}


var counter =  createCounter();
console.log(counter.count); // undefined
counter(); // Output: Counter: 1
counter(); // Output: Counter: 2
counter(); // Output: Counter: 3