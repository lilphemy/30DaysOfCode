
let rateInput = document.querySelectorAll("#rate-values");
let submitBtn = document.querySelector("#btn");
let sectionOne = document.querySelector(".diffspeek");
let sectionTwo = document.querySelector(".diffsection");
let rateComment = document.getElementById("ratetext");


rateInput.forEach((ratebtn) => {

    ratebtn.addEventListener("click", (e)=>{
        
        if(e.target){
            submitBtn.removeAttribute("disabled");
        }
        let select = e.target.innerHTML;
        rateComment.innerHTML = `You selected ${select} out of 5`;
        e.target.classList.add("active");
    })
})

let thankYouRates = function(){
    sectionOne.classList.add("hide");
    sectionTwo.classList.remove("hide");
}

submitBtn.addEventListener("click", thankYouRates)