let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");



let arrayProcessor = function (usedArray) {
    let modifiedArray = [];
    let i = 0;
    let m = 0;


    do {

        modifiedArray[i] = [];

        for (let j = 1; j <= usedArray[i]; j++) {
            modifiedArray[i].push(j);
        }

        for(let m = 0; m <= modifiedArray[i].length - 1; m++){

            if ((modifiedArray[i][m] % 3 === 0) && (modifiedArray[i][m] % 5 === 0)) {
                modifiedArray[i][m] = "FuzzBuzz";
            } else if (modifiedArray[i][m] % 3 === 0) {
                modifiedArray[i][m] = "Fuzz";
            } else if (modifiedArray[i][m] % 5 === 0) {
                modifiedArray[i][m] = "Buzz";
            } else {
                modifiedArray[i][m] = modifiedArray[i][m];
            }
        }

        
        i++;
    } while (i <= usedArray.length - 1);

    console.log(modifiedArray, modifiedArray.length); //TEST CASES

    textField.innerHTML = modifiedArray;

    return modifiedArray;


}

inputBtn.addEventListener("click", arrayProcessor([10, 6, 15, 20]));








