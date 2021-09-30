
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
// global variables
  var passwordLength;
  var upperCaseChoice;
  var lowerCaseChoice;
  var specialChoice;
  var numberChoice;
  var choices;
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", " ] ", "}", "|", "<", ">", "[", "?"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Function
function generatePassword() {

  passwordLength = prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128 characters");
  console.log("Password length is " + passwordLength + " characters long");

  if(!passwordLength) {
    alert("Invalid choice");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("The number of characters must be between 8 and 128");
    console.log("Password length is " + passwordLength + " characters long");
  
  } else { 
    upperCaseChoice = window.confirm("Will your password contain upper case letters?");
    console.log("Upper Case " +  upperCaseChoice);
    lowerCaseChoice = window.confirm("Will your password contain lower case letters");
    console.log("Lower case " + lowerCaseChoice);
    specialChoice = window.confirm("Will your password contain special characters?");
    console.log("Special Character " + specialChoice);
    numberChoice = window.confirm("Will your password contain numbers?");
    console.log("Number " + numberChoice);
  
  };
 

// this variable will not add upp each return and will only show the ammount of characters selected every time a password is generated
var passwordTextArea = [];
  

// all possible outcomes for each choice
// Used .concat to use distribution and combine arrays together for specific choices
if (!upperCaseChoice && !lowerCaseChoice && !specialChoice&& !numberChoice) {
  choices = alert("Please try again.");
  console.log("Selection not valid");
  generatePassword();

} else if (upperCaseChoice && lowerCaseChoice && specialChoice&& numberChoice) {
  choices = upperCase.concat(lowerCase, specialCharacters, numbers);
  console.log(choices);

} else if (upperCaseChoice && lowerCaseChoice && specialChoice) {
  choices = upperCase.concat(lowerCase, specialCharacters);
  console.log(choices);

} else if (upperCaseChoice && lowerCaseChoice && numberChoice) {
  choices = upperCase.concat(lowerCase, numbers);
  console.log(choices);

} else if (upperCaseChoice && specialChoice && numberChoice) {
  choices = upperCase.concat(specialCharacters, numbers);
  console.log(choices);

} else if (lowerCaseChoice && specialChoice && numberChoice) {
  choices = lowerCase.concat(specialCharacters, numbers);
  console.log(choices);

} else if (upperCaseChoice && lowerCaseChoice) {
  choices = upperCase.concat(lowerCase);
  console.log(choices);

} else if (upperCaseChoice && specialChoice) {
  choices = upperCase.concat(specialCharacters);
  console.log(choices);

} else if (upperCaseChoice && numberChoice) {
  choices = upperCase.concat(numbers);
  console.log(choices);  

} else if (lowerCaseChoice && specialChoice) {
  choices = lowerCase.concat(specialCharacters);
  console.log(choices);  

} else if (lowerCaseChoice && numberChoice) {
  choices = lowerCase.concat(numbers);
  console.log(choices);  

} else if (specialChoice && numberChoice) {
  choices = specialCharacters.concat(numbers);
  console.log(choices);  

} else if (upperCaseChoice) {
  choices = (upperCase);
  console.log(choices);

} else if (lowerCaseChoice) {
  choices = (lowerCase);
  console.log(choices);
  
} else if (specialChoice) {
  choices = (specialCharacters);
  console.log(choices);
  
} else if (numberChoice) {
  choices = (numbers);
  console.log(choices);  


};


// loop
for (var i = 0; i < passwordLength; i++) {
  var choiceBank = choices[Math.floor(Math.random() * choices.length)];
  passwordTextArea.push(choiceBank)
  console.log(choices);
}
// this shows password on website inside inside text area
var password = passwordTextArea.join("");
console.log("Your new password is: " + password);
return password;


};