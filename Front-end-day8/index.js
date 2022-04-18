let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");


function arraySorter(arr) {
    let newReArray = [];
    let miniArray = [];
    let reArrayed = [];
    let newArrayForm = [];

    for (let picks of arr) {
        miniArray.push([...picks]);
        console.log(miniArray);
        
    }
    for (let usedPicks of miniArray) {
        reArrayed.push([...usedPicks.reverse()]);
        console.log(reArrayed);
    }
    for (let i = 0; i <= reArrayed.length - 1; i++) {
        newReArray.push(reArrayed[i].join(''));
        console.log(newReArray);
    }

    for(let j = 0; j <= arr.length - 1; j++){
        if(arr[j] === newReArray[j]){
            newArrayForm.push(true)
        }else{
            newArrayForm.push(false)
        }

    }

    console.log(newArrayForm);
    textField.innerHTML = newArrayForm;
    return newArrayForm;
}







inputBtn.addEventListener("click", () => arraySorter(["madam","magic", "mum", "ovation", "racecar"]));







