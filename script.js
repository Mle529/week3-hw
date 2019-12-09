// Array of Special Characters
var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "=",
    "+",
    "'",
    ",",
    ".",
    "?",
    ";",
    ":",
    "<",
    ">",
    "[",
    "]",
    "{",
    "}",
    "_",
    "|",
    "`",
    "~"
];

// Array of Numeric Characters
var numericCharacters = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
];

// Array of Lowercase Characters
var lowercaseCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Array of Uppercase Characters
var uppercaseCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

// Asking users their password preference
function getPasswordOptions() {
    var length = parseInt(prompt(
        "How many characters do you want your password to contain?"
    ));

    // This is to check if they entered a number to specify the length of the password
    if (isNaN(length) === true) {
        alert("Please specify the legnth of the password");
        return;
    }

    // This is to check if the password is at least 8 characters long. If the statement is false then the prompt will end
    if (length < 8) {
        alert("Password needs to be atleast 8 characters long");
        return;
    }

    // This is to check if the password is less tha 128 characters long. If the statement is false then the prompt will end
    if (length > 128) {
        alert("Password needs to be less than 129 characters long");
        return; 
    }

    // Add a Special Character to the password
    var addSpecialCharacters = confirm(
        "Click OK to add a Special Character to the password"
    );

    // Add a Numeric Character to the password
    var addNumericCharacters = confirm(
        "Click OK to add a Numeric Number to the password"
    );

    // Add a Lowercase Character to the password
    var addLowercaseCharacters = confirm(
        "Click OK to add a Lowercase Character to the password"
    );

    // Add an Uppercase Character to the password
    var addUppercaseCharacters = confirm(
        "Click OK to add a Uppercase Character to the password"
    );

    // Making sure they have at least one of each character
    if (
        addSpecialCharacters === false &&
        addNumericCharacters === false &&
        addLowercaseCharacters === false &&
        addUppercaseCharacters === false 
    ) {
        alert("Please add at least one of each character type");
        return;
    }

    // Creating a var to store the user's character input
    var passwordOptions = {
        length: length,
        addSpecialCharacters: addSpecialCharacters,
        addNumericCharacters: addNumericCharacters,
        addUppercaseCharacters: addUppercaseCharacters,
        addLowercaseCharacters: addLowercaseCharacters
    };

    return passwordOptions;

} // Closing {} of getPasswordOptions function

  // Creating a var for the copy and generate element 
  var generateBtn = document.querySelector("#generate");
  var copyBtn = document.querySelector("#copy");
  
  // Click event for creating a password
  generateBtn.addEventListener("click", writePassword);
  // click event to save the password to a clipboard
  copyBtn.addEventListener("click", copyToClipboard);


 // This function is to generate a random character from the arrays
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// This function will generate a password
function generatePassword() {
    var options = getPasswordOptions();
    
    // This will store the generated password
    var result = [];

    // These variables are arrays that will store generated characters
    var generatedChars = [];
    var chosenChar = [];

    // This is to add the array of special characters to the generatedChar array and push new random speical characters to the chosenChar.
    // The concat will combine the sting of characters to from the password
    if (options.addSpecialCharacters) {
        generatedChars = generatedChars.concat(specialCharacters);
        chosenChar.push(getRandom(specialCharacters));
    }

    // This is to add the array of numeric characters
    if (options.addNumericCharacters) {
        generatedChars = generatedChars.concat(numericCharacters);
        chosenChar.push(getRandom(numericCharacters));
    }

    // This is to add the array of Lowercase characters
    if (options.addLowercaseCharacters) {
        generatedChars = generatedChars.concat(lowercaseCharacters);
        chosenChar.push(getRandom(lowercaseCharacters));
    }

    // This is to add the array of Uppercase characters
    if (options.addUppercaseCharacters) {
        generatedChars = generatedChars.concat(uppercaseCharacters);
        chosenChar.push(getRandom(uppercaseCharacters));
    }

    // This For loop creates a password based on how many characters long the user inputs
    for (var i = 0; i < options.length; i++) {
        var generatedPassword = getRandom(generatedChars);

        result.push(generatedPassword);
    }

    for (var i = 0; i < chosenChar.length; i++) {
        
        result[i] = chosenChar[i];

    // The result of the generated password
    return result.join("");
    }

}

// Creating the password and copy to clipboard input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
  }
  
  function copyToClipboard() {
    var passwordText = document.querySelector("#password");
  
    passwordText.select();
    document.execCommand("copy");
  
    alert(
      "Your password " + passwordText.value + " was copied to your clipboard."
    );
  }

