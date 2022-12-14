"use strict"
let screenValue="";
document.getElementById("calcScreen").readOnly = true;
const allButtons=document.querySelectorAll(".calcButton");
const displayScreen=document.getElementById("calcScreen");
// console.log(allButtons);
for (let bt of allButtons) {
    bt.addEventListener("click", (event) => {
        let buttonText = event.target.innerText;
        console.log(buttonText);
        if(buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText;
            displayScreen.value = screenValue;
        }else if(buttonText == "c"){
            screenValue = "";
            displayScreen.value = screenValue;
        }else if(buttonText == "="){
            const answer = eval(screenValue);
            displayScreen.value = answer;
            screenValue = answer;
        }else{
            screenValue += buttonText;
            displayScreen.value = screenValue;
        }
    });
}
window.onerror = function() {
    alert(" Please enter valid expression using valid buttons.");
    screenValue = "";
    displayScreen.value = screenValue;
    console.clear();
};
