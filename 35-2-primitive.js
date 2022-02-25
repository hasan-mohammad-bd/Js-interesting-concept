//35-2 Primitive data type and non-primitive data type

/*
primitive data types
1. number
2. string 
3. boolean
4. undefined
5. boolean
6. symbol
*/

/* 
non-primitive data types
1.object
*/

//primitive data
//here b is not changed although the a's value has been changed. the initial place of a variable data is called primitive data type.
let a = "hello"
let b = a;
console.log(a,b);
a = "gello";
console.log(a,b);

//no primitive data
//non primitive data crate a reference, where if the reference data is changed, the other related data will be changed.
const x = {job: "wev developer"}
const y = x;
console.log(x,y);
x.job = "front end developer";
console.log(x,y);
