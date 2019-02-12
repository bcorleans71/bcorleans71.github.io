//We have two main types of data simple and complex. 
//Simple data types represent a single value and include:
//Strings - A collection of text characters or symbols enclosed by quotes '' or "".
//Numbers - Includes any numerical value positive, negative or with decimal. 
//Booleans A true or false value. Typically used in conditional statements using comparison operators.
//Complec data types represent a collection of values. They can contain any type of data simple or complex.
//Each piece of data is stored at a particular location in the collection index for arrays and keys for objects.
//Arrays are ordered lists of data stored in square brackets[].
//Every value in the list has an index which starts at 0.
//We can access values at specific indices using bracket notation.
var arr = [1, 2, 3];
arr[0];
//Variable arr should print to the console 1 since 1 is at the first index of the array.
//Arrays have a length property making it easy to find the length or number of indices of the array.
arr.length;
//arr.length should print to the console 2 since the array contains three indice 1,2,3 starting at 0.
//Arrays have many useful methods. All methods must have data being manipulated within parenthesis.   
//.push() is one methd that adds an index to the end of the array.
console.log(arr.push(4));
//Line 19 should print to the console the length of the array which is 4.
console.log(arr);
//Line 21 should print to the console the entire new array [1, 2, 3, 4];
//Array.isArray() method determines whether the passed value is an Array and evaluates to a boolean.
//If the value tested within the parenthesis is an array it evaluates to true. Otherwise it evaluates to false.
Array.isArray(arr);
//Line 25 will evaluate to true since var arr is an array.
//.pop() method removes the last element from an array and returns that element. This method changes the length of the array.
console.log(arr.pop());
//Line 28 will return the last element of the array which is 4.
//The shift() method removes the first element from an array and returns that removedconsole.log() element. 
//This method changes the length of the array.
console.log(arr.shift());
//Line 32 prints to the console 1 since the first element of the array is 1.
console.log(arr);
//Line 35 will now print to the console the new array [2, 3, 4];
//.sort() method sorts the elements of an array in place and returns the array.
console.log(arr.sort());
//Line 37 will sort the array. Sorting order cannot be guaranteed.
//.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
//format of splice method is arr.splice(start, delete count, item 1, item 2);
//start is index in which to start changing the array. delete count is number of elemenst to delete. 
//item 1, 2, etc. are what elements to add to the array. If left blank only elements are removed.
console.log(arr.splice(1, 1));
//Line 43 should print to the console the character of the array at index [1].
//.unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(arr.unshift(7, 8));
//line 46 adds the elements 7 and 8 to the beginning of the array and returns the new length of the array.
//Objects are a collection of data relating to a single object or identity stored in curly braces {}.
//Every value has a corresponding key.
//Dot notation returns the value in the object that corresponds to the key name.
var value = {
    fruit: 'banana', 
    vegetable: 'eggplant',
    legume: 'lentil'
}
console.log(value.vegetable);
//Line 56 returns the value 'eggplant' associated with the vegetable key. 
//Bracket notation can also be used and key must be written as a string.
console.log(value['fruit']);
//Line 59 will print to the console banana which is the value associated witht the fruit key.









