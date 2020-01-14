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
    var divGuesses = document.createElement("div");
        divGuesses.setAttribute("id", `row_${rows}`);
        guesses.appendChild(divGuesses)
    for (var column = 0; column < 6; column++) {
        var colorBox = document.createElement("div");
            colorBox.style.border = "1px solid red";
            colorBox.style.width = "40px";
            colorBox.style.height = "25px";
            colorBox.style.display = "inline-block";
            colorBox.style.margin = "5px";
            colorBox.style.borderRadius = "15px";
            divGuesses.appendChild(colorBox);

            
    }

    var divPins = document.createElement("div");
        divPins.setAttribute("id", `row_${rows}`);
        checkPin.appendChild(divPins);
    for (var column = 0; column < 4; column++) {
        var pin = document.createElement("div");
            pin.style.border = "1px solid red";
            pin.style.width = "15px";
            pin.style.height = "10px";
            pin.style.margin = "0 5px";
            pin.style.display = "inline-block";
            divPins.appendChild(pin);
    }
}

