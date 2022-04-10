let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");



function arrayProcessorReverse(processArray) {
    let j = 0;
    
    let realArray = [];

    for (let i = 0; i <= processArray.length - 1; i++) {
        let newPatch = processArray[i].split("/");
        let spin = {name: newPatch[0], age: newPatch[1], level: newPatch[2]};
        realArray.push(spin);
    }

    console.log(realArray); //TEST CASES
    textField.innerHTML = realArray; // TEST CASES
    return realArray;
}

inputBtn.addEventListener("click", () => arrayProcessorReverse(["lilphemy/28/200L", "Obed/22/300L", "stoneCode/100/25", "undertaker/29/400L"]));







