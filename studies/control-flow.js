//JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal
//of interactivity in your application.
//Block statements are the most basic and are enclosed by a set of curly brackets.
//One of the most common control flow statements are conditional statements. 
//An example of a conditional statement is an if/else statement and evaluate to true or false. 
var i = 20; 
  
if (i === 10) {
  console.log("i is 10"); 
}else if (i === 15) {
  console.log("i is 15"); 
}else if (i === 20) {
  console.log("i is 20"); 
}else
  console.log("i is not present"); 
//1st statement resolves to false and checks the next statement, 2nd. statement resolves to false and checks the next statement,
//3rd. statement resolves to true and the conditions are met. 
//Another example of a control flow statement is a switch statement.
var day = 3;
var dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName); // Tuesday



