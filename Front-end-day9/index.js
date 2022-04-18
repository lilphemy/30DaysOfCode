let inputBlock = document.getElementById("intvalue");
let inputBtn = document.getElementById("btn");
let textField = document.querySelector(".newtext p");


function pascalTriangle(arg) {
    
    let pascalTri = [];
    for (let i = 0; i < arg; i++){
        const gogs = [1];
        for(let j = 1; j < i ; j++){
            gogs.push(pascalTri[(i-1)][(j-1)] + pascalTri[(i-1)][j]);
        }
        if (i > 0) gogs.push(1);
        pascalTri.push(gogs);
    }
    console.log(pascalTri);
    return pascalTri;
}







inputBtn.addEventListener("click", () => pascalTriangle(12));







