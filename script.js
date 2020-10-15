// Assignment code here

/*//Determines the length of the password. Options are (8-128". Return an integer of 8-128 depending on the user input.)
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
//Generates a random number based off of charset and charsetAll. Use randomGenerator(1) to access charset. Use randomGenerator() to access charsetAll.
var randomNumberGenerator = function(charsetselection) {
    if (charsetselection === 1) {
        var randomNumber = Math.floor(Math.random() * charset.length);
        return randomNumber; 
    } else {
        var randomNumber = Math.floor(Math.random() * charsetAll.length);
        return randomNumber;
    }

}
*/
/* var finalLength = passLength();
    var finalChar = charSelect();
    if (finalChar === "yes") {
        for (var i = 0; i < finalLength; i++) {
            console.log(charsetAll[randomNumberGenerator()]);
        }
    } else {
        for (var i = 0; i < finalLength; i++) {
            console.log(charset[randomNumberGenerator(1)]);
        }
    }
    */


var generatePassword = function () {
    var howLong = window.prompt("How long would you like your password to be? please choose a number between 8-128");
    var length = parseInt(howLong);
    window.alert("You have selected your character length");
    var charSelect = window.confirm("Would you like to use special characters?");
    window.alert("You have selected your character type");
    var upperCapSelect = window.confirm("Would you like to use upper case letters?");
    window.alert("Your case prefrences have been noted");
    var lowerCapSelect = window.confirm("Would you like to us lower case letters?");
    window.alert("Your case prefrences have been noted");
    var numericSelect = window.confirm("Would you like to use Numeric values?");
    var charFinal = "";

    //Character Variables for the CharFinal
    var charsetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charsetLowerSpecial = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "&", "'", "(", ")", "*", 
    "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
    var charsetUpperSpecial = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#", "$", "%", "&", "'", "(", ")", "*", 
    "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
    var charsetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charsetAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "#", "$", "%", "&", "'", "(", ")", "*", 
    "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
    var charsetSpecial = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
    var charsetNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var charsetNumericLower = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charsetNumericUpper = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charsetNumericSpecial = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];
    var charsetNumericLowerSpecial = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charsetNumericUpperSpecial = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charsetNumericAll = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //End Result
    var result = "";

    if (charSelect && lowerCapSelect && !upperCapSelect) {
        charFinal = charsetLowerSpecial;
    } else if (charSelect && upperCapSelect && !lowerCapSelect) {
        charFinal = charsetUpperSpecial;
    } else if (charSelect && lowerCapSelect && upperCapSelect) {
        charFinal = charsetAll;
    } else if (!charSelect && lowerCapSelect && !upperCapSelect) {
        charFinal = charsetLower;
    } else if (!charSelect && upperCapSelect && !lowerCapSelect) {
        charFinal = charsetUpper;
    } else if (!charSelect && lowerCapSelect && upperCapSelect) {
        charFinal = charset;
    } else {
        window.alert("incorret input, please try again");
        return "Generate Password";
    }
    if (length >= 8 && length <= 128) {
        for (i = 0; i < length; i++) {
            console.log(charFinal[Math.floor(Math.random() * charFinal.length)]);
            result += (charFinal[Math.floor(Math.random() * charFinal.length)]);
        };
        } else {
            window.alert("Incorrect input, please try again");
            
        };
    return result;


}

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