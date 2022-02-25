//35-4 Null Vs Undefined, different ways you will get undefined
/* 
undefined cases
//===============
1. variable value not assigned
2. function but didn't write return anything
3. wrote return but didn't return anything.
4. parameter which in not passed 
5. property that does't exist in an object
6. if the index value doesn't exist, but you would like to want that.
7. if we would like to delete a value then later want to get the value
8. explicitly set the value as undefined

*/

//variable value not assigned will give undefined
let first;
console.log(first);


//function result is not return will give undefined
function second(x,y){
    const sum = x + y;
}


const result = second(3, 91);
console.log(result);


//wrote return but return anything 
function add(a,b){
    const sum = a + b;
    return;
    if(b <10){
        return;
    }
    const fun = a*b;
    return sum;
}

const fourth = add(2,7)
console.log(fourth);

//parameter which in not passed gives you undefined
function double(a, b){
    const result = a*2;
    console.log(b);
    return result;
}

double(81);


const fifth = {name: "sogir", age: 15 }
console.log(fifth.phone);

//the index value doesn't exist
const sixth = [34,67,43,12,87]

console.log(sixth[10]);


//if we would like to delete a value then later want to get the value
//here delete should not be used for array. in this case slice should be used.
const array = [34,67,43,12,87]
delete array[2];
console.log(array[2]);

//explicitly set the value as undefined
const seventh = undefined
console.log(seventh);

//null
//=========================

//if the phone number is not available, it can be set as null
const myObj = {name: "Haram",phone: null }
console.log(myObj.phone);

//null vs undefined

//null: the value is not exist
//undefined : not return,deleted, not mentioned etc.

