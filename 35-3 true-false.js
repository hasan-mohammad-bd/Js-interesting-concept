//35-3 Different Truthy and Falsy values in JavaScript

/* 
falsy:
//==========================
false
number: 0
empty string
undefined
null
NaN
=============================

truthy:
//========
true
nay number(positive or negative)
any string including single white space, "0" will be true, "false" will be true,
empty array []
empty object {}
anything else that is not falsy will be truthy.
*/

const x = false;
if(x){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

const y = true;
if(y){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//any number (positive or negative is true)
const z = 12;
if(z){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//any string is true
const a = "hasan";
if(a){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//but the empty string is false

const b = "";
if(b){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}
//=======================================================
//here c value is not defined, output will be undefined
//and the undefined will be false
let c;
console.log("value of x", c);
if(c){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//null will be false
const d = null;
if(d){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//NaN is also false
const e = parseInt("hello");
console.log("value of e:",e);
if(e){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//empty array if true
const f = [3,4,5,6];
if(f){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}

//empty object will be true
const g = {};
if(g){
    console.log("variable is truthy");
}
else {
    console.log("variable is Falsy");
}