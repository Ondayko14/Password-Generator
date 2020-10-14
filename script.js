// Assignment code here
var charset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsetAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "&", "'", "(", ")", "*", 
"+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

//Determines the length of the password. Options are (8-128". Return an integer of 8-128 depending on the user input.)
var passLength = function() {
    var lengthQuestion = parseInt(window.prompt("How long would you like your password to be? Please insert a number between 8-128"));
    if (lengthQuestion >= 8 && lengthQuestion <= 128) {
        var lengthConfirmation = window.confirm("Your password will be " + lengthQuestion + " characters long. is this okay?");
        if (lengthConfirmation) {
            console.log(lengthQuestion);
            return lengthQuestion;
        } else {
            passLength();
        }
    } else {
        window.alert("Invalid input, please insert a number 8-128. Please note it should be input as '8', '9', '20', ect...");
        passLength();
    }
}
//Determines wether or not to use special characters in the password. (charsetAll = "yes" charsetNo = "no") Returns "yes" or "no"
var charSelect = function() {
    var charQuestion = window.prompt("Would you like to use special characters in the creation  of this password? please enter YES or NO");
    if (charQuestion.toLowerCase() === "yes") {
        var charConfirmation = window.confirm("Are you sure you would like to use special characters?");
        if (charConfirmation) {
            window.alert("Special Characters have been selected");
            console.log("yes");
            return "yes";
        } else {
            charSelect();
        }
    } else if (charQuestion.toLowerCase() === "no") {
        var charConfirmation = window.confirm("Are you sure that you do not want to use special characters?");
        if (charConfirmation) {
            window.alert("Special Characters have been turned off");
            console.log("no");
            return "no";
        } else {
            charSelect();
        }
    } else {
        window.alert("Invalid input. Please answer Yes or No");
        charSelect();
    }
     
}

var generatePassword = function () {
    var finalLength = passLength();
    var finalChar = charSelect();
    if (finalChar === "yes") {
        for (var i = 0; i < finalLength; i++) {
            console.log(charsetAll[i]);
        }
    } else {
        for (var i = 0; i < finalLength; i++) {
            console.log(charset[i]);
        }
    }
}

generatePassword();

/*

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

*/