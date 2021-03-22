// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz".split("") 
  var upperLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split
  var number = "1234567890".split("")
  var special  = "!@#$%^&*``?".split("")
  
  var finalPasword = ''
  var finalArray = []
  var passwordString = []
  
  var passwordLength = Number(prompt("How long do you want your password (8, 128)"));

  if (confirm("Do you want lowercase letters in your password?"))
  {
    finalArray = finalArray.concat(lowerLetters);
  }
  if  (confirm("Do you want uppercase in your password"))
  {
      finalArray = finalArray.concat(upperLetters);
  }
  if (confirm("do you want special character"))
  {
    finalArray = finalArray.concat(special);
  }
  if (confirm("do you want numbers"))
  {
    finalArray = finalArray.concat(number);
  }
  password = '';
  for (var i = 0; i < passwordLength; i++)
  {
    password += finalArray[Math.floor(Math.random() * finalArray.length)]
  }
  return password;
}
