let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");


function mergedSortedArr(arr1, arr2) {
    
    let mergedArr = [...arr1, ...arr2];

    for(let i = 1; i <= mergedArr.length; i+= 1){
        if(mergedArr[i - 1] > mergedArr[i]){
            let snook = mergedArr[i - 1];
            mergedArr[i - 1 ] = mergedArr[i];
            mergedArr[i] = snook;
        }
    }

    console.log(mergedArr);
    textField.innerText = mergedArr;
    return mergedArr;
}


inputBtn.addEventListener("click", () => mergedSortedArr([2, 4, 5, 6, 9], [11, 12, 14, 16, 17, 18]));







