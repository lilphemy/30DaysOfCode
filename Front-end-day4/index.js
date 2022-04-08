let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");



let arrayProcessor = function (arrayOfObjects) {

    let arrayResult = [];
    let i = 0;

    for (x in arrayOfObjects){
        arrayResult.push(`${arrayOfObjects[x].name}/${arrayOfObjects[x].age}/${arrayOfObjects[x].level}`);
        console.log(arrayResult);
    }

    console.log(arrayResult); // TEST CASES

    return arrayResult;

}

inputBtn.addEventListener("click", () => arrayProcessor([{ name: "hulk", age: 28, level: "200L" }, {name: "hawkEye", age: 27, level: "100L" }, {name: "ironMan", age: 27, level: "300L" }]));








