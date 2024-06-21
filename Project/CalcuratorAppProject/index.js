var buttonKey = document.querySelectorAll(".numKey");
var opKey = document.querySelectorAll(".opKey");
var inputArea = document.querySelector(".input");
var numberCal = [,];
var opCal;
var value = 0;
var numKey = [buttonKey[9], buttonKey[6],
            buttonKey[7], buttonKey[8],
            buttonKey[3], buttonKey[4],
            buttonKey[5], buttonKey[0],
            buttonKey[1], buttonKey[2],];




// Number Butoon
numKey[0].addEventListener("click", function(){
    inputArea.textContent += 0;
});
numKey[1].addEventListener("click", function(){
    inputArea.textContent += 1;
});
numKey[2].addEventListener("click", function(){
    inputArea.textContent += 2;
});
numKey[3].addEventListener("click", function(){
    inputArea.textContent += 3;
});
numKey[4].addEventListener("click", function(){
    inputArea.textContent += 4;
});
numKey[5].addEventListener("click", function(){
    inputArea.textContent += 5;
});
numKey[6].addEventListener("click", function(){
    inputArea.textContent += 6;
});
numKey[7].addEventListener("click", function(){
    inputArea.textContent += 7;
});
numKey[8].addEventListener("click", function(){
    inputArea.textContent += 8;
});
numKey[9].addEventListener("click", function(){
    inputArea.textContent += 9;
});

// Clear Button
opKey[0].addEventListener("click", function(){
    inputArea.innerHTML = "";
    numberCal[0] = 0;
    numberCal[1] = 0;
    opCal="";
});

// OparetorKey -----------------------------

// addKey
opKey[2].addEventListener("click", function(){
    numberCal[0] = addOpa(inputValue());
    inputArea.textContent = "";
});
// subtractKey
opKey[1].addEventListener("click", function(){
    numberCal[0] = subtractOpa(inputValue());
    inputArea.textContent = "";
});
//multiplyKey
opKey[3].addEventListener("click", function(){
    numberCal[0] = multiplyOpa(inputValue());
    inputArea.textContent = "";
});
// divideKey
opKey[5].addEventListener("click", function(){
    numberCal[0] = divideOpa(inputValue());
    inputArea.textContent = "";
});
// equar
opKey[4].addEventListener("click", function(){
    numberCal[1] = parseInt(inputArea.textContent);
    if (opCal === "+") {
        value = numberCal[0] + numberCal[1]
        inputArea.textContent = value;
    }
    if (opCal === "-") {
        value = numberCal[0] - numberCal[1]
        inputArea.textContent = value;
    }
    if (opCal === "*") {
        value = numberCal[0] * numberCal[1]
        inputArea.textContent = value;
    }
    if (opCal === "/") {
        value = numberCal[0] / numberCal[1]
        inputArea.textContent = value;
    }

})



// SetopatorFunction
function addOpa(value){
    opCal = "+";
    return parseInt(value);
}
function subtractOpa(value){
    opCal = "-";
    return parseInt(value);
}
function multiplyOpa(value) {
    opCal = "*";
    return parseInt(value);
}
function divideOpa(value) {
    opCal = "/";
    return parseInt(value);
}
// InputFunction
function inputValue(){
    var value = inputArea.textContent;
    return parseInt(value);
}