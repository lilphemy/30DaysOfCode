let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");



let arrayProcessor = function (arrayOfObjects) {

    let arrayResult = [];
    let i = 0;

    do {
        arrayResult[i] = arrayOfObjects[i]["name"] + "/" + arrayOfObjects[i]["age"] + "/" + arrayOfObjects[i]["level"];
        arrayResult.push(arrayResult);
        i++;
    }while (i <= arrayOfObjects.length - 1);

    textField.innerHTML = arrayResult.splice(arrayResult.length - 1, 1); // TEST CASES
    console.log(arrayResult); // TEST CASES

    return arrayResult;

}

inputBtn.addEventListener("click", () => arrayProcessor([{ name: "hulk", age: 28, level: "200L" }, {name: "hawkEye", age: 27, level: "100L" }, {name: "ironMan", age: 27, level: "300L" }]));








