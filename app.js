"use strict";

let adviceID = document.getElementById("adviceID");
let adviceText = document.getElementById("adviceText");
let btn = document.getElementById("adviceBtn");

async function getAdvice() {
    try {
        let req = await fetch(`https://api.adviceslip.com/advice?timestamp=${new 
        Date().getTime()}`);
        let res = await req.json();
        
        adviceID.innerText = `${res.slip.id}`;
        adviceText.innerText = `"${res.slip.advice}"`;
        
    } catch (error) {
        console.log("Error fetching advice:", error);
    }
}

btn.addEventListener("click", getAdvice);