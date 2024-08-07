'use strict';
const API = 'https://api.adviceslip.com/advice';
const adviceContainer = document.querySelector('.advice');
const idContainer = document.querySelector('.ID');
const generateButton = document.querySelector('.generate-btn');



//Function to fetch advice api ,then assign id value to idContainer and assign advice to adviceContainer
const generateAdvice = ()=>{
    fetch(API).then(response=>{return response.json()}).
    then(response=>{
        let slip = response.slip;
        idContainer.textContent = slip.id;
        adviceContainer.textContent = slip.advice;
        return{
            idContainer,adviceContainer
        }
    }).catch(error=>{console.log(error)});
};

/* When document is loaded the generate function called , 
and when user clicks generate button
 a new advice is loaded */
document.addEventListener('DOMContentLoaded',()=>{
    generateAdvice();
    generateButton.addEventListener('click',()=>{
        generateAdvice();
    });
})


