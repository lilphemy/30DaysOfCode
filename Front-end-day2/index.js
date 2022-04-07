let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");

inputBtn.addEventListener("click", printIntegers);

function printIntegers() {
    let n = inputBlock.value;
    let valuesHolder = [];
    let finalResult = "";
    let i = 0;


    for (let i = 1; i <= n; i++) {

        valuesHolder.push(i);
    }

    console.log(valuesHolder);

    for(let j = 0; j <= valuesHolder.length - 1; j++){

        if((valuesHolder[j] % 3 === 0) && (valuesHolder[j] % 5 === 0)){
            valuesHolder[j] = "FuzzBuzz";
        }else if (valuesHolder[j] % 3 === 0) {
            valuesHolder[j] = "Fuzz";
        }else if (valuesHolder[j] % 5 === 0){
            valuesHolder[j] = "Buzz";
        }else {
            valuesHolder[j] = valuesHolder[j];
        }

        finalResult += `${valuesHolder[j]} `;
    }

    

    console.log(valuesHolder, valuesHolder.length);
    
    textField.innerHTML = finalResult;


}


    
