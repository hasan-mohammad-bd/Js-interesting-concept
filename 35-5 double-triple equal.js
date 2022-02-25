//35-5 double equal (==) vs triple equal (===), implicit conversion

const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");
}
else {
    console.log("condition is false");
}

//double(==) equal check is only value
//triple(===) equal check value and data type.

//double equal(==) implicitly(it self) convert the value and and compar.
//double equal(==) also convert bullion(true, false) to 1,0 then compar them with another value.
//we should always use triple equal(===)

//more comparison
//******************************************** */
//object and array cant not be compared. because this data type is non primitive or reference type
//array can be compared by looping through
//only primitive type can be compared.
//******************************************** */
const a = {name: "ali"};
const b = {name: "ali"};
if(a == b){
    console.log("both are same");
}
else {
    console.log("they are not same");
}
