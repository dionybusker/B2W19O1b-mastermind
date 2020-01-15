var guessContainer = document.getElementsByClassName("guess-container")[0];
var guesses = document.createElement("div");
    guesses.style.width = "75%";
    guesses.style.display = "inline-block";
    guessContainer.appendChild(guesses);
var checkPin = document.createElement("div");
    checkPin.style.width = "25%";
    checkPin.style.display = "inline-block";
    guessContainer.appendChild(checkPin);

for (var rows = 12; rows > 0; rows--) {
    // kleuren gedeelte
    var divGuesses = document.createElement("div");
        divGuesses.setAttribute("class", "guess-rows");
        guesses.appendChild(divGuesses)
    for (var column = 0; column < 4; column++) {
        var colorBox = document.createElement("div");
            colorBox.setAttribute("class", "guess-box")
            colorBox.style.border = "1px solid black";
            colorBox.style.width = "40px";
            colorBox.style.height = "25px";
            colorBox.style.display = "inline-block";
            colorBox.style.margin = "5px";
            colorBox.style.borderRadius = "0 10px";
            divGuesses.appendChild(colorBox);
    }

    // pins gedeelte
    var divPins = document.createElement("div");
        divPins.setAttribute("class", "hint-rows");
        checkPin.appendChild(divPins);
    for (var column = 0; column < 4; column++) {
        var pin = document.createElement("div");
            pin.setAttribute("class", "hint-box");
            pin.style.border = "1px solid black";
            pin.style.width = "7px";
            pin.style.height = "15px";
            pin.style.margin = "10px 4px";
            pin.style.display = "inline-block";
            divPins.appendChild(pin);
    }
}

var colors = ["red", "green", "blue", "yellow", "purple", "orange"];
