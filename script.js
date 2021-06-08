// Assignment Code
var generateBtn = document.querySelector("#generate");


// Character Options
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";

var passwrdArr = []
var userChoice = []


// Function to select the # of characters
function passwordGenerator() {
  var passwordLength = prompt("Please choose how many characters you would like your password to be (Must be between 8-128 characters)");

if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters long");
    return passwordGenerator();
  } else if (passwordLength >=8 && passwordLength <=128){
    alert("The following 3 screens will let you choose the type of characters that will be in your password. If you enter 'No' for all 3, the password will be generated with all lowercase letters");
    password = charChoice();
  } else {
      alert("Password length must be a number between 8-128 characters long");
    passwordGenerator();
  }

// Function to prompt character selection
  function charChoice(){
var upperChoice = window.confirm("Do you want password to include uppercase letters, Yes or No?");
if (upperChoice === true) {
  userChoice = userChoice.concat(upperCase);
  passwrdArr.push(upperCase[Math.floor(Math.random()*upperCase.length)]);
  }

// Prompt to select Lowercase Characters
  var lowerchoice = window.confirm("Do you want password to include lowercase letters, Yes or No?");
  if (lowerchoice === true){
    userChoice = userChoice.concat(lowerCase);
    passwrdArr.push(lowerCase[Math.floor(Math.random()*lowerCase.length)]);
  }

//Prompt to select Numbers
  var numChoice = window.confirm("Do you want password to include numbers, Yes or No?");
  if(numChoice===true){
    userChoice = userChoice.concat(numbers);
    passwrdArr.push(numbers[Math.floor(Math.random()*numbers.length)]);
  }
// Prompt to select Special Characters

var specialChoice = window.confirm("Do you want password to include special characters, Yes or No?")
  if(specialChoice == true){
    userChoice = userChoice.concat(specialChar);
    passwrdArr.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
  }
 
var completePass = ""
for(f = 0; f < passwordLength; f++){
  completePass = completePass + passwrdArr[Math.floor(Math.random() * passwrdArr.length)]
}

console.log (completePass);
return completePass;

}
return password;
console.log(password);
}
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
