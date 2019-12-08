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
]

// Array of Numeric Characters
var numericCharacters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
]

// Array of Lowercase Characters
var lowercaseCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

// Array of Uppercase Characters
var uppercaseCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
]

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
    var addSpecialCharacter = confirm(
        "Click OK to add a Special Character to the password"
    );

    // Add a Numeric Character to the password
    var addNumericCharacter = confirm(
        "Click OK to add a Numeric Number to the password"
    );

    // Add a Lowercase Character to the password
    var addLowercaseCharacter = confirm(
        "Click OK to add a Lowercase Character to the password"
    );

    // Add an Uppercase Character to the password
    var addUppercaseCharacter = confirm(
        "Click OK to add a Uppercase Character to the password"
    );

    // Making sure they have at least one of each character
    if (
        addSpecialCharacter === false &&
        addNumericCharacter === false &&
        addLowercaseCharacter === false &&
        addUppercaseCharacter === false 
    ) {
        alert("Please add at least one of each character type")
        return;
    }

    

}