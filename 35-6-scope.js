//35-6 Block scope, global scope, Hoisting

//global variable/scope
//==================================
const favNum = 27;
console.log(favNum);


//here first,second variable or parameter is only accessible if this function
//the variable is local scope/variable
//===================================
function add(first, second){
    console.log(mood); //here hoisting is applied.the only va
    const result = first + second;
    //block scrip
    if(result >9){
        let mood = "happy"
        console.log();//can be access inside, but cant be access from outside.
        //var scope can be accessed.
        //********************************** */
        //if we dont use any let/const before the variable the variable become global variable. it is called global leaking
    }
    console.log(result);
    console.log(favNum);//global variable can be accessible in the function
    return result;
}

const sum = add(11, 35);
// console.log(first);
// console.log(result);


//Global Scope: Global Scope can be access anyway.
//local Scope: Declared in the function.
//Block Scope: Declared in second bracket.
//In block let, const variable should be declared. it will not be hoisting.
//must be use let, const before declaring variable otherwise the variable will become global variable.


