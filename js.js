// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
  // where i put the other arrays
  var mixedArray = [];
  // password array
  var pswdArray = [];


  // how long the user wants their password
  var numberOfChars = prompt("How many characters would you like for your password?");
  // if the password is less than 8 we run the alert
  if (numberOfChars < 8) {
    alert("Password must be at least 8 characters");
    return "Try Again!";
  }
  // if the password is greater than 129 we run this alert
  else if (numberOfChars > 129) {
    alert("Password must be less than 129 characters");
    // this prompts them to try again
    return "Try Again!";
  }
  //if the user enters an incorrect value run this alert
  //isNaN checks if it is not a number (equal to a number)
  else if (isNaN(numberOfChars) === true) {
    alert("OOPS! Lets try this again!")
    return "Try Again!";
  }
  // run this when user enters vaild numbers and are ready to chose
  // how they want their password
  else {

    // check if user wants special characters in their password
    var confirmSpecialChar = confirm("Would you like special characters in your password");
    // if they want it, we will loop it 
    if (confirmSpecialChar) {
      for (var i = 0; i <specialChar.length; i++) {
        mixedArray.push(specialChar[i]);
      }
    }

    // check if user wants lowercase letters
        var confirmLowercase = confirm("Would you like lowercase letters in your password?");
        //if they want it, it gets looped into mixedaArray
        if (confirmLowercase) {
        for (var i = 0; i < lowercase.length; i++) {
        mixedArray.push(lowercase[i]);
        }
    }  


    // check if user wants any numbers
    var confirmNumbers = confirm("Would you like numbers in your password?");
    // if true, we loop out a number into the mixedArray
    if (confirmNumbers) {
      for (var i = 0; i < numb.length; i++) {
       mixedArray.push(numb[i]);
      }
    }

   

    // check if user wants uppercase letters
    var confirmUppercase = confirm("Would you like uppercase letters in your password?");
    // if they want, we loop uppercase letters into the mixedArray
    if (confirmUppercase) {
      for (var i = 0; i < uppercase.length; i++) {
        mixedArray.push(uppercase[i]);
      }
    }

    // we loop the number user chose and push out the mixedArray that we being looped 
    for (var i = 0; i < numberOfChars; i++) {
   // math.random shoots out random arrays from pswdArray
      pswdArray.push(mixedArray[(Math.floor(Math.random() * mixedArray.length))]);

    }
    //returning pswdArray into a string
    userPassword = pswdArray.join("");

    return userPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);