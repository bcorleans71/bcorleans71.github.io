//A String literal is a sequence of characters used by Javascript programmers to populate string objects or display
//text to a user. It is considered a primitive datattype. The characters could be letters, numbers or symbols and are
//enclosed within one or two quotation marks on either side. For example, you can assign variables to the datatype string   
var str = 'string';    
//There are several very useful ways to manipulate strings. One example of a string method is .length. We can easily 
//find the length of any string with this method by writing .length after the string in question.        
str.length;
// The above code should return 6 since the 'string' assigned to the above variable is 6 chaacters long.
//Another important thing to note is each character in a string represents a number index starting at 0. 
//You can easily retrieve or access any string character by using bracket notation []. 
//Simply place the index number you want to access inside of the brackets.
str[0];
//Since str variable is assigned to the string 'string' it can be accessed as it shows above.
//Since computers start counting at 0 we can subtract 1 from any length to access the last character of any string.
str[str.length - 1];
//Another way of accessing individual characters in a string is the method .charAt().
str.charAt(0);
//We can also tie strings together or concatenate them.
var strConcat1 = 'Hello everyone!'; 
var strConcat2 = 'I hope you are all feeling great!!';
console.log(strConcat1 + ' ' + strConcat2);
// Above should print to the console Hello everyone! I hope you are all feeling great!!




