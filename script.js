var guessContainer = document.getElementsByClassName("guess-container")[0];

for (var column = 0; column < 12*6; column++) {
    var box = document.createElement("div");
        box.style.border = "1px solid red";
        box.style.width = "20px";
        box.style.height = "10px";
        guessContainer.appendChild(box);
}