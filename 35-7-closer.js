function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());

//if we return a function from a another functions, they create closer or encapsulation, or create a private reference.