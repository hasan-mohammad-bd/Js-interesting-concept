function welcomeMessage(name, greetHandler){
    // console.log(greetHandler);
    greetHandler(name);
}

// const name = ["Tom Hanks","Tom Brady", "Tom Cruise"]
// const myObj = {name:"tom chinku", age: 11};
function greetMorning(name){
    //this function is called from main function
    console.log("good morning",name);
}
function greetAfternoon(name){
    //this function is called from main function
    console.log("good afternoon",name);
}

//here calling the main function.
welcomeMessage("Tom Hangs", greetMorning)
welcomeMessage("shakib Hnags", greetAfternoon)

//when a function is called, if the parameter is an another function, called "call back" function.
//or we a function is called, if another function is called along with the function is called "call back" function.