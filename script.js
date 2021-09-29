// Assignment code here
var passwordLength;
var upperCaseConfirm;
var lowerCaseConfirm;
var numberConfirm;
var specialConfirm;
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
    upperCaseConfirm = window.confirm("Will your password contain upper case letters?");
    console.log("Upper Case " +  upperCaseConfirm);
    lowerCaseConfirm = window.confirm("Will your password contain lower case letters");
    console.log("Lower case " + lowerCaseConfirm);
    numberConfirm = window.confirm("Will your password contain numbers?");
    console.log("Number " + numberConfirm);
    specialConfirm = window.confirm("Will your password contain special characters?");
    console.log("Special Character " + specialConfirm);
  }
  
}; 
  
// none have true choices
if (!upperCaseConfirm && !lowerCaseConfirm && !specialConfirm && !numberConfirm) {
  choices = alert("Invalid choice");

// each have 4 true choices
} else if (upperCaseConfirm && lowerCaseConfirm && specialConfirm && numberConfirm) {
  choices = (upperCase, lowerCase, numbers, specialCharacters);
  console.log(choices);

// each have 3 true choices
} else if (upperCaseConfirm && lowerCaseConfirm && specialConfirm) {
  choices = (upperCase, lowerCase, specialCharacters);
  console.log(choices);

} else if (upperCaseConfirm && lowerCaseConfirm && numberConfirm) {
  choices = (upperCase, lowerCase, numbers);
  console.log(choices);

} else if (upperCaseConfirm && specialConfirm && numberConfirm) {
  choices = (upperCase, specialCharacters, numbers);
  console.log(choices);

} else if (lowerCaseConfirm && specialConfirm && numberConfirm) {
  choices = (lowerCase, specialCharacters, numbers);
  console.log(choices);

  //each have 2 true choices
} else if (upperCaseConfirm && lowerCaseConfirm) {
  choices = (upperCase, lowerCase);
  console.log(choices);

} else if (upperCaseConfirm && specialConfirm) {
  choices = (upperCase, specialCharacters);
  console.log(choices);

} else if (upperCaseConfirm && numberConfirm) {
  choices = (upperCase, numbers);
  console.log(choices);  

} else if (lowerCaseConfirm && specialConfirm) {
  choices = (lowerCase, specialCharacters);
  console.log(choices);  

} else if (lowerCaseConfirm && numberConfirm) {
  choices = (lowerCase, numbers);
  console.log(choices);  

} else if (specialConfirm && numberConfirm) {
  choices = (specialCharacters, numbers);
  console.log(choices);  

  // each have 1 true choice



    





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
