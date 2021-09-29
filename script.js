// Assignment code here

// global variables
var passwordLength;
var upperCaseConfirm;
var lowerCaseConfirm;
var specialConfirm;
var numberConfirm;
var choices;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", " ] ", "}", "|", "<", ">", "[", "?"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];






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
    upperCaseConfirm = window.confirm("Will your password contain upper case letters?");
    console.log("Upper Case " +  upperCaseConfirm);
    lowerCaseConfirm = window.confirm("Will your password contain lower case letters");
    console.log("Lower case " + lowerCaseConfirm);
    specialConfirm = window.confirm("Will your password contain special characters?");
    console.log("Special Character " + specialConfirm);
    numberConfirm = window.confirm("Will your password contain numbers?");
    console.log("Number " + numberConfirm);
  
  };
 
  
// none have true choices
if (!upperCaseConfirm && !lowerCaseConfirm && !specialConfirm && !numberConfirm) {
  choices = alert("Please try again.");

// each have 4 true choices
} else if (upperCaseConfirm && lowerCaseConfirm && specialConfirm && numberConfirm) {
  choices = upperCase.concat(lowerCase, specialCharacters, numbers);
  console.log(choices);

// each have 3 true choices
} else if (upperCaseConfirm && lowerCaseConfirm && specialConfirm) {
  choices = upperCase.concat(lowerCase, specialCharacters);
  console.log(choices);

} else if (upperCaseConfirm && lowerCaseConfirm && numberConfirm) {
  choices = upperCase.concat(lowerCase, numbers);
  console.log(choices);

} else if (upperCaseConfirm && specialConfirm && numberConfirm) {
  choices = upperCase.concat(specialCharacters, numbers);
  console.log(choices);

} else if (lowerCaseConfirm && specialConfirm && numberConfirm) {
  choices = lowerCase.concat(specialCharacters, numbers);
  console.log(choices);

  //each have 2 true choices
} else if (upperCaseConfirm && lowerCaseConfirm) {
  choices = upperCase.concat(lowerCase);
  console.log(choices);

} else if (upperCaseConfirm && specialConfirm) {
  choices = upperCase.concat(specialCharacters);
  console.log(choices);

} else if (upperCaseConfirm && numberConfirm) {
  choices = upperCase.concat(numbers);
  console.log(choices);  

} else if (lowerCaseConfirm && specialConfirm) {
  choices = lowerCase.concat(specialCharacters);
  console.log(choices);  

} else if (lowerCaseConfirm && numberConfirm) {
  choices = lowerCase.concat(numbers);
  console.log(choices);  

} else if (specialConfirm && numberConfirm) {
  choices = specialCharacters.concat(numbers);
  console.log(choices);  

  // each have 1 true choice
} else if (upperCaseConfirm) {
  choices = (upperCase);
  console.log(choices);

} else if (lowerCaseConfirm) {
  choices = (lowerCase);
  console.log(choices);
  
} else if (specialConfirm) {
  choices = (specialCharacters);
  console.log(choices);
  
} else if (numberConfirm) {
  choices = (numbers);
  console.log(choices);  


};

// this variable wont add upp each return and will only show the ammount of characters selected every time a password is generated
var passwordEl = [];

// loop
for (var i = 0; i < passwordLength; i++) {
  var allChoices = choices[Math.floor(Math.random() * choices.length)];
  passwordEl.push(allChoices);
  console.log(choices);
}
// this shows password on the website
var password = passwordEl.join("");
console.log("Your new password is: " + password);
return password;


};