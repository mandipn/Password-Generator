// creating the generate password function and variables for each type of character

function generatePassword() {
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var possibleCharacters = [];

// getting the input and validating against the number of characters required

numberOfCharacters = prompt("How many characters would you like in your password? Choose between 10-64 characters.");
if (numberOfCharacters < 10 || numberOfCharacters > 64) {
  return "Please choose at least 10 characters but no more than 64";
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number.");
}
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");
  
}

// asking whether the user would like lower case characters then prompting accordingly

hasLowercase = confirm("Would you like lowercase characters in your password?");
if (hasLowercase) {
  var turnToLowercase = alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}

// asking whether the user would like upper case characters then prompting accordingly

hasUppercase = confirm("Would you like uppercase characters in your password?");
if (hasUppercase) {
  alert("Your password will have uppercase characters.");
}
else {
  alert("Your password will NOT have uppercase characters.");
}

// asking whether the user would like numbers then prompting accordingly

hasNumbers = confirm("Would you like to use numbers in your password?");
if (hasNumbers) {
  alert("Your password will have numbers.");
}
else {
  alert("Your password will NOT have numbers.");
}

// asking whether the user would like special characters then prompting accordingly

hasSpecial = confirm("Would you like special characters in your password?");
if (hasSpecial) {
  alert("Your password will have special characters.");
}
else {
  alert("Your password will NOT have special characters.");
}

// if user cancels all of the above selection types then prompting them to select at least one type

if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
  return "Please select at least one character type.";
};

// grouping (concating) together the selected characters

if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
}
if (hasSpecial) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
}

// picking random cards for the length of password

let finalPassword = ""
for (let i = 0; i < numberOfCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
  finalPassword = finalPassword + possibleCharacters[rng];
}
return finalPassword;
};

// Getting the references to the #generate element

var generateBtn = document.querySelector("#generate");

// Writing the password to the #password input

function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Adding the event listener to generate button

generateBtn.addEventListener("click", writePassword);