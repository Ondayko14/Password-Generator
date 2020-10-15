
//Password Generator Engine
var generatePassword = function () {
    //Prompts for the If Statements
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
    var charsetNumericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //End Result will display here
    var result = "";


    //If Statments to logically deduce what the CharFinal will be. It can be any of the local variables placed above
    if (charSelect && lowerCapSelect && !upperCapSelect && !numericSelect) {
        charFinal = charsetLowerSpecial;
    } else if (charSelect && upperCapSelect && !lowerCapSelect && !numericSelect) {
        charFinal = charsetUpperSpecial;
    } else if (charSelect && lowerCapSelect && upperCapSelect && !numericSelect) {
        charFinal = charsetAll;
    } else if (!charSelect && lowerCapSelect && !upperCapSelect && !numericSelect) {
        charFinal = charsetLower;
    } else if (!charSelect && upperCapSelect && !lowerCapSelect && !numericSelect) {
        charFinal = charsetUpper;
    } else if (!charSelect && lowerCapSelect && upperCapSelect && !numericSelect) {
        charFinal = charset;
    } else if (charSelect && !lowerCapSelect && !upperCapSelect && !numericSelect) {
        charFinal = charsetSpecial;
    } else if (charSelect && lowerCapSelect && !upperCapSelect && numericSelect) {
        charFinal = charsetNumericLowerSpecial;
    } else if (charSelect && upperCapSelect && !lowerCapSelect && numericSelect) {
        charFinal = charsetNumericUpperSpecial;
    } else if (charSelect && lowerCapSelect && upperCapSelect && numericSelect) {
        charFinal = charsetNumericAll;
    } else if (!charSelect && lowerCapSelect && !upperCapSelect && numericSelect) {
        charFinal = charsetNumericLower;
    } else if (!charSelect && upperCapSelect && !lowerCapSelect && numericSelect) {
        charFinal = charsetNumericUpper;
    } else if (!charSelect && lowerCapSelect && upperCapSelect && numericSelect) {
        charFinal = charsetNumericChar;
    } else if (charSelect && !lowerCapSelect && !upperCapSelect && numericSelect) {
        charFinal = charsetNumericSpecial;
    } else if (!charSelect && !lowerCapSelect && !upperCapSelect && numericSelect) {
        charFinal = charsetNumeric;
    } else {
        window.alert("Invalid Input, Please Try Again");
    }

    //Iterates thru the charFinal that was decided above and returns the letters as a string. Iteration length is from the "length prompt".
    if (length >= 8 && length <= 128) {
        for (i = 0; i < length; i++) {
            console.log(charFinal[Math.floor(Math.random() * charFinal.length)]);
            result += (charFinal[Math.floor(Math.random() * charFinal.length)]);
        };
        } else {
            window.alert("Incorrect input, please try again");
            
        };

    //returns the "result variable found underneath the charset Variables"
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