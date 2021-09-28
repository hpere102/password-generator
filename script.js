// Assignment code here
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "{", " ] ", "}", "|", "<", ">", "[", "?"];
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    lowerCase = window.confirm("Will your password contain lower case letters");
    console.log("Lower case " + lowerCase);
    upperCase = window.confirm("Will your password contain upper case letters?");
    console.log("Upper Case " +  upperCase);
    numberCharacters = window.confirm("Will your password contain numbers?");
    console.log("Number " + numberCharacters);
    specialCharacters = window.confirm("Will your password contain special characters?");
    console.log("Special Character " + specialCharacters);
  }
  
}; 
  
  


    





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
