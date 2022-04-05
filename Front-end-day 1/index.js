
let textSpace = document.querySelector("P");
let resultSpace = document.querySelector(".speeking");


function sumArray (arrayValue){
    let sumresult = 0;
    for(let i = 0; i < arrayValue.length; i++){
        sumresult += arrayValue[i];   
    }

    textSpace.innerHTML = sumresult;
}

let ArrayOne = [10, 24, 5, -16, 25];
let arrayTwo = [56, -50, 2, 10, -6, 33];
let arrayThree = [14, 80, -35, 9, -6, 33];

sumArray(arrayTwo);

let viewGaze = function () {
    if (textSpace === null) {
        resultSpace.addClass("takeout");
    }
}

viewGaze();