// Assignment code here
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsetAll = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Determines the length of the password. Options are (8-16, 8-24, and 8-128. Returns "8-16", "8-24" or "8-128".)
var passLength = function() {
    var lengthQuestion = window.prompt("How long would you like your password to be? 8-16, 8-24, or 8-128?");
    if (lengthQuestion === "8-16" || lengthQuestion === "8-24" || lengthQuestion === "8-128") {
        var lengthConfirmation = window.confirm("Your password will be " + lengthQuestion + " characters long. is this okay?");
        if (lengthConfirmation) {
            switch (lengthQuestion) {
                case "8-16":
                console.log("8-16");
                return "8-16";
                break;

                case "8-24":
                console.log("8-24");
                return "8-24";
                break;

                case "8-128":
                console.log("8-128");
                return "8-128";
                break;
            }
        } else {
            passLength();
        }
    } else {
        window.alert("Invalid input, please insert 8-16, 8-24, or 8-128");
        passLength();
    }
}
//Determines wetehr or not to use special characters in the password. (charsetAll = "yes" charsetNo = "no") Returns "yes" or "no"
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

passLength();
charSelect();
/*

var generatePassword = function () {
    //Ask and verify selection of password length
    var passType = window.prompt("Would you like to use speacial charcters in the creation of this password? YES or NO.")
    window.alert("Password character type chosen.")


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
generateBtn.addEventListener("click", writePassword());

*/