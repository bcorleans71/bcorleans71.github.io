//Functions are reusable blocks of code that acceept inputs, proces thise inputs and returns a new data value.
//A function definittion or declaration consists of the function keyword, the name of the function 
//a list of parameters to the function enclosed in parenthesis and seperated by commas.
//Following functions definition and parameters are curly brackets {} to enclose the body which hold 
//instructions of the function.   
function sum(fruits) {
    var add = fruits + fruits;
    return add;
}
    sum();
//sum is the name of the function. fruits is the parameter and is named accordint to the input they represent.
//add is the variable used to assign the addition process of the function using the input parameter.
//return keyword determines what value is returned when the function is called. 
//sum is called outside the function. 
//Variables defined inside a function cannot be accessed from anywhere outside the function,
//because the variable is defined only in the scope of the function. 
//A function can access all variables and functions defined inside the scope in which it is defined.    
//A closure is the combination of a function and the lexical environment within which that function was declared. 
function closure() {
    var name = "internet"; // name is a local variable created by init
    function name() { // name() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    name();    
}
closure();