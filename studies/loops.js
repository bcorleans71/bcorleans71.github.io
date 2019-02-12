//Loops allow is to repeat code multiple times. We have several different loops depending on ther use.
//A for loop is used for the complex data type arrays and it's format is described below.  
var string = 'This is a string';
for (var i = 0; i < string .length; i++) {
}  
//The first statement in the parenthesis represents the starting value of the loop.
//The second statement in the parenthesis represents a boolean expression whose value is checked  
//before each loop. As long as this expression is true the loop will run.
//The third or increase statement in the parenthesis changes the value of the counting variable 
//after each loop.
//While loop run while some condition is true. The condition is a boolean wrapped in parenthesis.
//Before each loop the value of the condition is checked. As long os it is true it will run. 
//Once it becomes false it stops.
var count = 0;
while (count < 10) {
    console.log('loop loop until counter hits 10!');
}
count++;
//Count starts at 0 value. While condition count < 10 the code inside the loop will run.
//count++ represents the counter incrementing by 1 everytime the loop runs. 
//Once it reaches the value 10 the loop stops running.
//The for in statement iterates a specified variable over all the enumerable properties of an object.
function keys(key) { 
    var object = {};
    for (var key in object) {
    key = key(object);
    
    }
  
        }
    return keys(); 
    
